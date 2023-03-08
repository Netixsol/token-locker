export const ethFormat = (
  amount: string | number | undefined,
  includeDollarSign = false,
  removeZeroes = false,
  roundToNearestWholeNumber = false,
): string => {
  if (!amount) return '-';

  const amountInDecimals = parseFloat(amount.toString());
  const conditionalDollarSign = includeDollarSign ? '$' : '';

  if (amountInDecimals <= 0) return '-';
  if (amountInDecimals < 0.0001) return `< ${conditionalDollarSign}0.00001`;
  if (amountInDecimals < 1)
    return `${conditionalDollarSign}${parseFloat(amountInDecimals.toFixed(3))}`;
  const formattedPrice = (
    removeZeroes
      ? parseFloat(amountInDecimals.toFixed(2))
      : roundToNearestWholeNumber
      ? Math.round(amountInDecimals)
      : amountInDecimals.toFixed(2)
  )
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return conditionalDollarSign + formattedPrice;
};
