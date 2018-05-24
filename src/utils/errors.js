const ERRORS = {
  value: 'You enter incorrect number.',
  description: 'Please enter description.',
  currencyRate: 'You enter incorrect number.',
};

export default function errors(name) {
  return ERRORS[name];
}
