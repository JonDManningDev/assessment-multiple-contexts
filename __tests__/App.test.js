import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';
import { MemoryRouter } from 'react-router-dom';

describe('Sales', () => {
  describe('interactive functionality', () => {
    test('clicking an open sale\'s "Close" button marks it as closed', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const [ _closed, sale ] = container.querySelectorAll(".sale");
      expect(sale.textContent).toMatch(/Comvoy - \$30\,000/i);
      expect(sale.textContent).toMatch(/Close/i);

      const button = sale.querySelector("button");
      fireEvent.click(button);

      const salesTotalEl = container.querySelector(".sales-total");
      expect(salesTotalEl.textContent).toMatch(/\$87\,000/i);

      expect(sale.textContent).toMatch(/Comvoy - \$30\,000/i);
      expect(sale.textContent).toMatch(/Re-open/i);
    });

    test('clicking a closed sale\'s "Re-open" button marks it as open', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      const [ sale ] = container.querySelectorAll(".sale");
      expect(sale.textContent).toMatch(/Hyplex - \$15\,000/i);
      expect(sale.textContent).toMatch(/Re-open/i);

      const button = sale.querySelector("button");
      fireEvent.click(button);

      const salesTotalEl = container.querySelector(".sales-total");
      expect(salesTotalEl.textContent).toMatch(/\$42\,000/i);

      expect(sale.textContent).toMatch(/Hyplex - \$15\,000/i);
      expect(sale.textContent).toMatch(/Close/i);
    });
  });
})
