# CRUD API Express

Este proyecto es una API simple que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una lista de elementos. 

## Requisitos de instalación

Para ejecutar esta API, necesitarás tener [Node.js](https://nodejs.org/) instalado en tu sistema.

1. Clona este repositorio en tu computadora.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `node app.js` para iniciar la aplicación en el puerto 3000.

## Uso

### Obtener todos los elementos

Para obtener todos los elementos, realiza una solicitud GET a `/api/items`.

### Obtener un elemento por ID

Para obtener un elemento por su ID, realiza una solicitud GET a `/api/items/:id`.

### Crear un nuevo elemento

Para crear un nuevo elemento, realiza una solicitud POST a `/api/items` con el cuerpo JSON.

### Actualizar un elemento por ID

Para actualizar un elemento existente por su ID, realiza una solicitud PUT a `/api/items/:id` con el cuerpo JSON.

### Eliminar un elemento por ID

Para eliminar un elemento por su ID, realiza una solicitud DELETE a `/api/items/:id`.

## Ventajas y beneficios

- Simple y fácil de usar.
- Permite realizar operaciones CRUD en una lista de elementos.
- Ideal para proyectos pequeños y pruebas.
- Puede servir como punto de partida para aplicaciones más grandes.

## Pruebas con Postman

Puedes realizar pruebas en esta API utilizando [Postman](https://www.postman.com/).

1. Abre Postman.
2. Crea una nueva solicitud para probar las rutas mencionadas anteriormente.
3. Envía las solicitudes y verifica las respuestas.

¡Disfruta usando esta API!

---

La aplicación está funcionando en http://localhost:3000
