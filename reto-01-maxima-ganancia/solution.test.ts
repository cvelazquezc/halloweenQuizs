import { maximaGanancia } from './solution';

describe('Reto 01: Máxima Ganancia de Parcelas', () => {
  it('debería devolver 10 para [1, 2, 3, 4]', () => {
    expect(maximaGanancia([1, 2, 3, 4])).toBe(10);
  });

  it('debería devolver 6 para [-2, 1, -3, 4, -1, 2, 1, -5, 4]', () => {
    expect(maximaGanancia([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('debería devolver -1 para [-1, -2, -3, -4]', () => {
    expect(maximaGanancia([-1, -2, -3, -4])).toBe(-1);
  });

  it('debería devolver 9 para [8, 1, -100, 2, 5]', () => {
    expect(maximaGanancia([8, 1, -100, 2, 5])).toBe(9);
  });
});
