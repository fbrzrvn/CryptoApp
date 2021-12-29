import { Links } from './Links';

describe('test nav-links', () => {
  test('links should have a lenght of 4', () => {
    const linksLenght = 4;
    expect(Links).toHaveLength(linksLenght);
  });
});
