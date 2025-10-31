# 🎃 Halloween TypeScript Quizs

Colección de retos de TypeScript con tests automatizados.

## 📁 Estructura del Proyecto

Cada reto está en su propia carpeta con la siguiente estructura:

```
reto-XX-nombre/
├── README.md          # Descripción del reto
├── solution.ts        # Tu solución
└── solution.test.ts   # Tests para validar la solución
```

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ver cobertura de tests
npm run test:coverage

# Ejecutar test de un reto específico
npm test reto-01
```

### Compilar TypeScript

```bash
npm run build
```

## 📝 Crear un Nuevo Reto

1. Crea una carpeta con el formato `reto-XX-nombre-descriptivo`
2. Añade un `README.md` con la descripción del reto
3. Crea `solution.ts` con tu solución
4. Crea `solution.test.ts` con los tests

## 🎯 Retos Disponibles

- [Reto 01: Máxima Ganancia de Parcelas](./reto-01-maxima-ganancia)


