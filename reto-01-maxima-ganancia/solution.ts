export function maximaGanancia(parcelas: number[]): number {
  if (parcelas.length === 0) return 0;
  
  return parcelas.slice(1).reduce((acc, actual) => {
    acc.sumaActual = Math.max(actual, acc.sumaActual + actual);
    acc.sumaMaxima = Math.max(acc.sumaMaxima, acc.sumaActual);
    return acc;
  }, { sumaActual: parcelas[0], sumaMaxima: parcelas[0] }).sumaMaxima;
}
