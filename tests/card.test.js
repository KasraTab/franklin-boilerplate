import {
  describe,
  it,
  expect,
  beforeEach
} from 'vitest';
import { JSDOM } from 'jsdom';
import decorate from '../blocks/columns/columns.js';

let dom;
let document;

beforeEach(() => {
  // Set up the JSDOM environment
  dom = new JSDOM(`
      <head></head>
      <body>
        <main>
          <div class="cards block">
            <div> <!-- Row 1 -->
              <div><picture><img src="image1.jpg" alt="Image 1"></picture></div>
              <div>
                <p><strong>Unmatched speed</strong></p>
                <p>some text</p>
              </div>
            </div>
            <div> <!-- Row 2 -->
              <div><picture><img src="image1.jpg" alt="Image 2"></picture></div>
              <div>
                <p><strong>Unmatched speed</strong></p>
                <p>some text</p>
              </div>
            </div>
          </div>
        </main>
      </body>
  `);
  document = dom.window.document;
});

describe('decorate function', () => {
  it('adds the correct column class and image column class', () => {
    const block = document.querySelector('.block');
    decorate(block);

    // Check if the block has the correct number of column class
    expect(block.classList.contains('columns-2-cols')).toBe(true);

    // Check each row and its columns
    const rows = block.querySelectorAll(':scope > div'); // Rows directly inside block
    expect(rows.length).toBe(2);

    rows.forEach((row) => {
      const columns = row.children; // Columns inside a row
      expect(columns.length).toBe(2); // Each row has 2 columns

      // Check if the first column has the 'columns-img-col' class
      const firstColumn = columns[0];
      const picture = firstColumn.querySelector('picture');
      if (picture && firstColumn.children.length === 1) {
        expect(firstColumn.classList.contains('columns-img-col')).toBe(true);
      }

      // The second column should NOT have the 'columns-img-col' class
      const secondColumn = columns[1];
      expect(secondColumn.classList.contains('columns-img-col')).toBe(false);
    });
  });
});
