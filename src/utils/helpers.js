export const formatPrice = (number) => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    // maximumFractionDigits: 2,
  }).format(number / 100)
}

export const getUniqueValues = () => {}
