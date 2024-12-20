import { loadCSS } from '../../scripts/aem.js';

/**
 * Checks if the ratio is different from 50-50 and applies the ratio to its column respectively
 * @param {HTMLElement} columnOne - first column section
 * @param {HTMLElement} columnTwo - second column section
 */

function setRatio(columnOne, columnTwo) {
  const ratio = document.querySelector('meta[name="column-ratio"]')?.content;
  if (ratio) {
    const isDefault = ratio.includes('50');
    if (!isDefault) {
      const [firstRatio, secondRatio] = ratio.split('-');
      const root = document.querySelector(':root');

      root.style.setProperty('--first-ratio', `${firstRatio}%`);
      root.style.setProperty('--second-ratio', `${secondRatio}%`);

      columnOne.classList.add('first-column');
      columnTwo.classList.add('second-column');
    }
  }
}

/**
 * Modify the page so that it has a two-column template for the first two sections
 */
export default function buildAutoBlocks() {
  const main = document.querySelector('main');
  const firstSectionIsHero = [
    ...main.children,
  ][0].children[0].classList.contains('hero');
  // remove empty div sections
  [...main.children].forEach((node) => {
    const hasChildren = [...node.children].length > 0;
    if (!hasChildren) {
      node.remove();
    }
  });

  const columnOne = firstSectionIsHero
    ? [...main.children][1]
    : [...main.children][0];
  const columnTwo = firstSectionIsHero
    ? [...main.children][2]
    : [...main.children][1];
  const newSection = document.createElement('section');

  const observer = new MutationObserver((list) => {
    list.forEach((change) => {
      const status = change.target.dataset.sectionStatus;
      if (status === 'loaded') {
        loadCSS('/templates/two-columns/two-columns.css');
        setRatio(columnOne, columnTwo);
        main.insertBefore(newSection, columnOne);
        newSection.classList.add('section-wrapper');
        newSection.appendChild(columnOne);
        newSection.appendChild(columnTwo);
        observer.disconnect();
      }
    });
  });

  observer.observe(columnTwo, {
    attributes: true,
    attributeFilter: ['data-section-status'],
  });
}
