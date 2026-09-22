# Módulo 2 — Selectores, cascada y modelo de caja

Una regla CSS tiene un selector y declaraciones `propiedad: valor`. Cuando
varias reglas afectan al mismo elemento, el navegador considera importancia,
especificidad y orden.

En el modelo de caja el contenido está rodeado por `padding`, `border` y
`margin`. Con `box-sizing: border-box`, el ancho declarado incluye el relleno y
el borde, lo cual hace más predecible el tamaño.

## Experimentos

1. Cambia `padding: 1.5rem` por `padding: 3rem` y predice el resultado.
2. Agrega al final `.tarjeta { border-color: red; }`. Explica por qué cambia.
3. Sustituye `.tarjeta.destacada` por `#principal`. Compara la especificidad.

## Práctica

Crea una segunda tarjeta con otra materia. Añade una etiqueta visual para su
nivel y un estado `:hover`. No copies estilos: reutiliza las clases existentes.
