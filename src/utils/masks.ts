export const cpfMask = (value: string) => {
  return value.replace(/\D/g, '').replace(/(\d{5})(\d{3})/g, '$1-$2');
};
