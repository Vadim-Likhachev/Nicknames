/* eslint-disable no-undef */
import Validator from '../app';

test('task test', () => {
  const received = Validator.validateUsername('polly');
  expect(received).toBeTruthy();
});

test('Заглавные буквы', () => {
  const received = Validator.validateUsername('POLLY');
  expect(received).toBeTruthy();
});

test('Цифры', () => {
  const received = Validator.validateUsername('P254ly');
  expect(received).toBeTruthy();
});

test('Нижнее подчеркивание', () => {
  const received = Validator.validateUsername('p_olly');
  expect(received).toBeTruthy();
});

test('Тире', () => {
  const received = Validator.validateUsername('po-lly');
  expect(received).toBeTruthy();
});

test('Начинается с нижнего подчеркивания', () => {
  const received = Validator.validateUsername('_polly');
  expect(received).toBeFalsy();
});

test('Начинается с тире', () => {
  const received = Validator.validateUsername('-polly');
  expect(received).toBeFalsy();
});

test('Заканчивается  тире', () => {
  const received = Validator.validateUsername('polly-');
  expect(received).toBeFalsy();
});

test('Больше 3 цифр подряд', () => {
  const received = Validator.validateUsername('po5555lly');
  expect(received).toBeFalsy();
});
