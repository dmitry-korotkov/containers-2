import ErrorRepository from '../js/app';

test('get correct error', () => {
  const someErrorRepository = new ErrorRepository();
  someErrorRepository.addError(1, 'Ошибка 1');
  const result = someErrorRepository.translate(1);
  expect(result).toBe('Ошибка 1');
});

test('get size of errors', () => {
  const someErrorRepository = new ErrorRepository();
  someErrorRepository.addError(1, 'Ошибка 1');
  someErrorRepository.addError(2, 'Ошибка 2');
  const result = someErrorRepository.errorContainer.size;
  expect(result).toBe(2);
});

test('get existence of error', () => {
  const someErrorRepository = new ErrorRepository();
  someErrorRepository.addError(1, 'Ошибка 1');
  someErrorRepository.addError(2, 'Ошибка 2');
  const result = someErrorRepository.errorContainer.has(3);
  expect(result).toBe(false);
});

test('get uncorrect error', () => {
  const someErrorRepository = new ErrorRepository();
  someErrorRepository.addError(1, 'Ошибка 1');
  const result = someErrorRepository.translate(2);
  expect(result).toBe('Unknown error');
});
