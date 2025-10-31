# Plantilla para Crear Nuevos Retos

Esta es una plantilla para crear nuevos retos de TypeScript con tests.

## 📋 Pasos para Crear un Nuevo Reto

### 1. Crear la estructura de carpetas

```bash
mkdir reto-XX-nombre-del-reto
cd reto-XX-nombre-del-reto
```

### 2. Crear el archivo README.md

```markdown
# Reto XX: Nombre del Reto

## 📝 Descripción

[Descripción detallada del problema a resolver]

## 🎯 Objetivo

Implementar una función `nombreFuncion` que:
- [Requisito 1]
- [Requisito 2]
- [Requisito 3]

## ✅ Ejemplo

\`\`\`typescript
nombreFuncion(entrada1) // => salida1
nombreFuncion(entrada2) // => salida2
\`\`\`

## 🧪 Tests

Los tests validan:
- [Caso de prueba 1]
- [Caso de prueba 2]
- [Caso de prueba 3]
```

### 3. Crear el archivo solution.ts

```typescript
/**
 * [Descripción de la función]
 * @param parametro1 - [Descripción del parámetro]
 * @returns [Descripción del retorno]
 */
export function nombreFuncion(parametro1: TipoParametro): TipoRetorno {
  // TODO: Implementa tu solución aquí
  throw new Error('Función no implementada');
}
```

### 4. Crear el archivo solution.test.ts

```typescript
import { nombreFuncion } from './solution';

describe('Reto XX: Nombre del Reto', () => {
  it('debería [descripción del test 1]', () => {
    expect(nombreFuncion(entrada)).toBe(salidaEsperada);
  });

  it('debería [descripción del test 2]', () => {
    expect(nombreFuncion(entrada)).toBe(salidaEsperada);
  });

  it('debería manejar [casos especiales]', () => {
    expect(nombreFuncion(entrada)).toBe(salidaEsperada);
  });
});
```

### 5. Ejecutar los tests

```bash
# Ejecutar solo los tests del nuevo reto
npm test reto-XX

# Ejecutar en modo watch mientras desarrollas
npm run test:watch
```

## 💡 Consejos

- **Empieza con los tests**: Escribe primero los tests para entender bien el problema
- **Casos de prueba**: Incluye casos normales, casos límite y casos especiales
- **Documentación**: Comenta tu código y explica la lógica compleja
- **Tipos de TypeScript**: Aprovecha el sistema de tipos para evitar errores
- **Refactorización**: Después de que pasen los tests, mejora tu código

## 🔍 Tipos de Retos Sugeridos

1. **Manipulación de Strings**: Palíndromos, anagramas, etc.
2. **Matemáticos**: Fibonacci, números primos, factoriales
3. **Arrays y Objetos**: Ordenamiento, filtrado, transformaciones
4. **Algoritmos clásicos**: Búsqueda binaria, algoritmos de ordenamiento
5. **Estructuras de datos**: Pilas, colas, listas enlazadas
6. **Recursión**: Problemas que se resuelven mejor con recursión
7. **Patrones de diseño**: Singleton, Factory, Observer, etc.

## 📚 Recursos

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Codewars](https://www.codewars.com/) - Para inspiración de retos
- [LeetCode](https://leetcode.com/) - Más retos de programación
