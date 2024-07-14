export const colorText = {
  primary: 'sky',
  error: 'red',
  warning: 'amber',
  success: 'green',
  secondary: 'gray',
};

export const getColor = (text: 'primary' | 'error' | 'warning' | 'success' | 'secondary') => {
  return colorText[text];
};
