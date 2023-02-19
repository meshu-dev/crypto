export const formatToUsdPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency: 'USD'
    }
  );

  const usdPrice = formatter.format(price);
  return usdPrice;
}
