/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  block.textContent = '';
  const myBlock = document.createElement('div');
  myBlock.textContent = 'This is my block';

  block.append(myBlock);
}
