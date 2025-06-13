export function validateForm(formData) {
  const errors = [];
  
  if (!formData.name.trim()) errors.push('Укажите имя');
  if (!formData.phone.match(/^[\d\s\-\+\(\)]{10,15}$/)) errors.push('Некорректный телефон');
  if (!formData.mail.includes('@') || !formData.mail.includes('.')) errors.push('Некорректный email');
  if (!formData.subscribe) errors.push('Необходимо согласие на обработку данных');
  
  return errors;
}