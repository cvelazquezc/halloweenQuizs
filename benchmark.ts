import * as fs from 'fs';
import * as path from 'path';
import { performance } from 'perf_hooks';

interface BenchmarkResult {
  reto: string;
  tiempo: number;
  exito: boolean;
}

function medirTiempo(fn: () => void): number {
  const inicio = performance.now();
  fn();
  const fin = performance.now();
  return fin - inicio;
}

async function ejecutarBenchmark() {
  console.log('🎃 Benchmark Global - Halloween TypeScript Quizs\n');
  console.log('='.repeat(60));

  const directorioBase = __dirname;
  const carpetas = fs.readdirSync(directorioBase);
  const retoCarpetas = carpetas.filter(nombre => nombre.startsWith('reto-'));

  if (retoCarpetas.length === 0) {
    console.log('\n❌ No se encontraron retos para ejecutar');
    return;
  }

  const resultados: BenchmarkResult[] = [];

  for (const carpeta of retoCarpetas.sort()) {
    const rutaSolution = path.join(directorioBase, carpeta, 'solution');
    
    try {
      const modulo = require(rutaSolution);
      const nombreFuncion = Object.keys(modulo)[0];
      const funcion = modulo[nombreFuncion];

      console.log(`\n📦 ${carpeta}`);
      console.log('-'.repeat(60));

      const tests = extraerTests(carpeta);
      let tiempoTotal = 0;

      tests.forEach((test, index) => {
        const tiempo = medirTiempo(() => {
          for (let i = 0; i < 1000; i++) {
            funcion(...test.input);
          }
        });
        
        tiempoTotal += tiempo;
        console.log(`  Test ${index + 1}: ${(tiempo / 1000).toFixed(6)}ms por ejecución (1000 iteraciones)`);
      });

      const tiempoPromedio = tiempoTotal / tests.length;
      resultados.push({
        reto: carpeta,
        tiempo: tiempoPromedio,
        exito: true
      });

      console.log(`  ✅ Promedio: ${(tiempoPromedio / 1000).toFixed(6)}ms por ejecución`);

    } catch (error) {
      console.log(`  ❌ Error: ${error instanceof Error ? error.message : 'Error desconocido'}`);
      resultados.push({
        reto: carpeta,
        tiempo: 0,
        exito: false
      });
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Resumen de Resultados:\n');
  
  const exitosos = resultados.filter(r => r.exito);
  if (exitosos.length > 0) {
    exitosos
      .sort((a, b) => a.tiempo - b.tiempo)
      .forEach((resultado, index) => {
        const medalla = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
        console.log(`${medalla} ${resultado.reto}: ${(resultado.tiempo / 1000).toFixed(6)}ms`);
      });
  }

  const fallidos = resultados.filter(r => !r.exito);
  if (fallidos.length > 0) {
    console.log('\n❌ Retos con errores:');
    fallidos.forEach(resultado => {
      console.log(`   ${resultado.reto}`);
    });
  }

  console.log('\n' + '='.repeat(60));
}

function extraerTests(carpeta: string): Array<{ input: any[] }> {
  switch (carpeta) {
    case 'reto-01-maxima-ganancia':
      return [
        { input: [[1, 2, 3, 4]] },
        { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]] },
        { input: [[-1, -2, -3, -4]] },
        { input: [[8, 1, -100, 2, 5]] }
      ];
    default:
      return [{ input: [[]] }];
  }
}

ejecutarBenchmark().catch(console.error);
