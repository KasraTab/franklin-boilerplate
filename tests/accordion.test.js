import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import decorateAccordion from '../blocks/accordion/accordion.js';

describe('decorateAccordion', () => {
  let document;

  beforeEach(() => {
    const dom = new JSDOM(`
            <div class="accordion">
                <div>Title 1</div>
                <div>Content 1</div>
                <div>Title 2</div>
                <div>Content 2</div>
            </div>
        `);
    document = dom.window.document;
  });

  it('should add item-title class to odd div elements', () => {
    const accordion = document.querySelector('.accordion');
    decorateAccordion(accordion);

    const titles = accordion.querySelectorAll('.item-title');
    expect(titles.length).toBe(2);
    expect(titles[0].textContent).toBe('Title 1');
    expect(titles[1].textContent).toBe('Title 2');
  });

  it('should add item-content class to even div elements', () => {
    const accordion = document.querySelector('.accordion');
    decorateAccordion(accordion);

    const contents = accordion.querySelectorAll('.item-content');
    expect(contents.length).toBe(2);
    expect(contents[0].textContent).toBe('Content 1');
    expect(contents[1].textContent).toBe('Content 2');
  });

  it('should toggle open class on title click', () => {
    const accordion = document.querySelector('.accordion');
    decorateAccordion(accordion);

    const title = accordion.querySelector('.item-title');
    title.click();
    expect(title.classList.contains('open')).toBe(true);

    title.click();
    expect(title.classList.contains('open')).toBe(false);
  });
});
