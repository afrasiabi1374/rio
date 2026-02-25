export const formatToman = (value: any) => {
  const amountInToman = Math.floor(value / 10);
  return new Intl.NumberFormat("fa-IR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amountInToman) + " تومان";
}