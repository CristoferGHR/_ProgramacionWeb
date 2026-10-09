# Server with MySQL2 TS

API REST de productos con Node.js, Express, TypeScript y MySQL2.

## Cómo ejecutar

1. Levantar MySQL (en mi caso con Docker):
   `docker run --name mysql-pos -e MYSQL_ROOT_PASSWORD=<password> -p 3306:3306 -d mysql:8`
2. Ejecutar `sql/products.sql` para crear la base `pos` y la tabla `products`.
3. Copiar `.env.example` a `.env` y llenar los valores.
4. `npm install`
5. `npm run dev` (desarrollo), o `npm run build` y luego `npm start` (versión compilada).

## Rutas

Prefijo: `/api/v1/products`

| Método | Ruta | Operación |
| --- | --- | --- |
| GET | `/getAll` | Productos activos |
| GET | `/getById/:id` | Un producto activo |
| POST | `/create` | Crear producto |
| PUT | `/update/:id` | Actualizar producto completo |
| PATCH | `/change-price/:id` | Cambiar solo el precio |
| DELETE | `/delete/:id` | Baja lógica (`active = FALSE`) |

## Evidencia

La colección HTTP está en [`request.http`](request.http) (extensión REST Client de VS Code). La petición 5 guarda el id del producto creado y las peticiones 7 a 15 lo reutilizan, por lo que todas las capturas corresponden al mismo producto (id 10).

| Requisito | Capturas |
| --- | --- |
| 1. Consulta general y por ID | [01 (parte 1)](evidencia/01-getAll_1.png), [01 (parte 2)](evidencia/01-getAll_2.png), [02](evidencia/02-getById.png) |
| 2. Creación de un producto | [05](evidencia/05-create.png) |
| 3. Actualización completa y cambio de precio | [07](evidencia/07-update.png), [09](evidencia/09-change-price.png) |
| 4. Baja lógica | [12](evidencia/12-delete.png) |
| 5. El producto dado de baja no aparece | [13](evidencia/13-get-All-sin-baja.png), [14](evidencia/14-getById-baja.png) |
| 6. ID inexistente y datos inválidos | [03](evidencia/03-id-inexistente.png), [06](evidencia/06-create-invalido.png), [10](evidencia/10-change-price-invalido.png) |

Capturas adicionales: [04](evidencia/04-id-invalido.png), [08](evidencia/08-update-inexistente.png), [11](evidencia/11-change-price-campos-extra.png), [15](evidencia/15-delete-otra-vez.png).
