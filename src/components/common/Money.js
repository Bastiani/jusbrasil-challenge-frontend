import currency from 'currency.js';

export const BRL = value => currency(value, { symbol: 'R$', precision: 2 });
