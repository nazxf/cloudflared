/**
 * Format a number into Indonesian Rupiah notation (no currency symbol).
 * Example: 19000 -> "19.000"
 */
export const formatRupiah = (value: number): string =>
  new Intl.NumberFormat('id-ID').format(value)
