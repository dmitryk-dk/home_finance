export default function validator(name, value) {
  switch(name) {
    case 'value':
      const regexp = /^\d+(\.\d{1,2})?$/;
      return regexp.test(value) || value === '';
    case 'description':
      return value !== '';
    default:
      return true;
  }
}
