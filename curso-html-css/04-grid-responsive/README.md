# Módulo 4 — Grid y diseño responsivo

Grid trabaja con filas y columnas. `repeat(auto-fit, minmax(...))` crea tantas
columnas como quepan y evita tarjetas demasiado estrechas. Así, parte del diseño
se adapta sin media queries; la media query del ejemplo ajusta detalles en
pantallas pequeñas.

## Práctica

1. Agrega dos productos.
2. Haz que uno ocupe dos columnas únicamente cuando haya espacio.
3. Añade una media query para eliminar ese tamaño especial bajo 700 px.
4. Explica por qué `width: 100vw` puede producir desplazamiento horizontal y
   por qué aquí se usa `width: min(92%, 70rem)`.
