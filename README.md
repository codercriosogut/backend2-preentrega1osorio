# Proyecto - PreEntrega1 - Cristian Osorio G

Este proyecto es una aplicación web con autenticación de usuarios, manejo de sesiones y protección de rutas. Está construido con Node.js, Express, MongoDB, y utiliza Handlebars como motor de plantillas.

## Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** con **Mongoose**
- **Passport.js** para autenticación local
- **bcrypt** para hashing de contraseñas
- **jsonwebtoken** para manejo de tokens JWT
- **Handlebars** como motor de plantillas


## Rutas
- **`src/app.js`**
- **`src/config/bcryptUtils.js`**
- **`src/config/connectMongodb.js`**
- **`src/config/jwtUtils.js`**
- **`src/config/middlewareAuth.js`**
- **`src/config/passport.js`**
- **`src/config/schemaUser.js`**
- **`src/routes/sessions.js`**
- **`src/routes/views.js`**
- **`src/views/login.hbs`**
- **`src/views/profile.hbs`**
- **`src/views/register.hbs`**
- **`src/views/layouts/main.hbs`**
- **`.gitignore`**
- **`package-lock.json`**
- **`package.json`**


## Rutas principales y API
- **`src/routes/views.js`**:
  - **`GET /login`**: Ruta para mostrar la vista de inicio de sesión.
  - **`GET /register`**: Ruta para mostrar la vista de registro.
  - **`GET /profile`**: Ruta para mostrar el perfil del usuario autenticado.

- **`src/routes/sessions.js`**: 
  - **`POST /api/sessions/register`**: Ruta para registrar un nuevo usuario.
  - **`POST /api/sessions/login`**: Ruta para iniciar sesión y generar un token JWT.
  - **`POST /api/sessions/logout`**: Ruta para cerrar sesión.

## Vistas

- **`src/views/login.hbs`**: 
  - Plantilla para la página de inicio de sesión de usuario.

- **`src/views/register.hbs`**: 
  - Plantilla para la página de registro de nuevo usuario.

- **`src/views/profile.hbs`**: 
  - Plantilla para mostrar el perfil del usuario autenticado.

- **`src/views/layouts/main.hbs`**: 
  - Plantilla principal que contiene la estructura HTML común para todas las vistas.


## Autenticación
Este proyecto utiliza Passport.js para la autenticación de usuarios y JWT para proteger las rutas de la API.


## Preparación del Proyecto:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/codercriosogut/backend2-preentrega1osorio.git


2. Instalar dependencias:
   ```bash
   npm install bcrypt connect-mongo express express-handlebars express-session jsonwebtoken mongoose passport passport-local

3.
