type FormatPriceOptions = {
  currencySymbol?: string;
  decimalSeparator?: string;
  thousandsSeparator?: string;
  decimalPlaces?: number;
  symbolPosition?: 'start' | 'end';
};

export const formatPrice = (
  price: number,
  options: FormatPriceOptions = {},
): string => {
  const {
    currencySymbol = '₺',
    decimalSeparator = ',',
    thousandsSeparator = '.',
    decimalPlaces = 2,
    symbolPosition = 'end',
  } = options;

  let formattedPrice = price.toFixed(decimalPlaces);

  formattedPrice = formattedPrice.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSeparator,
  );

  formattedPrice = formattedPrice.replace('.', decimalSeparator);

  return symbolPosition === 'end'
    ? `${formattedPrice} ${currencySymbol}`
    : `${currencySymbol}${formattedPrice}`;
};
