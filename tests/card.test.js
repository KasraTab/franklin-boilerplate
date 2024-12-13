import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import decorate from '../blocks/columns/columns.js';

let dom;
let document;

beforeEach(() => {
  // Set up the JSDOM environment
  dom = new JSDOM(`
    <div class="block">
      <div class="row">
        <div><picture><img src="image1.jpg" alt="Image 1"></picture></div>
        <div><div>Some text</div></div>
      </div>
      <div class="row">
        <div><div>Another content</div></div>
        <div><picture><img src="image2.jpg" alt="Image 2"></picture></div>
      </div>
    </div>
  `);
  document = dom.window.document;
});

describe('decorate function', () => {
  it('adds the correct column class and image column class', () => {
    const block = document.querySelector('.block');
    decorate(block);

    // Check the block for correct column class based on the number of columns
    expect(block.classList.contains('columns-2-cols')).toBe(true);

    // Check if the first column (with an image) gets the 'columns-img-col' class
    const firstColumn = block.querySelector('.row div:first-child');
    expect(firstColumn.querySelector('picture')).not.toBeNull(); // Ensure picture exists
    expect(firstColumn.classList.contains('columns-img-col')).toBe(true);

    // Check if the second column (without an image) does NOT get the 'columns-img-col' class
    const secondColumn = block.querySelector('.row div:nth-child(2)');
    expect(secondColumn.classList.contains('columns-img-col')).toBe(false);
  });

  it('does not add the image column class if the column does not contain a picture', () => {
    const block = document.querySelector('.block');
    decorate(block);

    // Check the second column (without an image)
    const secondColumn = block.querySelector('.row div:nth-child(2)');
    expect(secondColumn.classList.contains('columns-img-col')).toBe(false);
  });
});
