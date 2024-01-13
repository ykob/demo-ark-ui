module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  importOrder: ['^react', '^@?\\w', '^[./]'],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
