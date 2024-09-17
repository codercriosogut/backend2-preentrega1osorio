# Proyecto v1

Este proyecto es una aplicación web con autenticación de usuarios, manejo de sesiones y protección de rutas. Está construido con Node.js, Express, MongoDB, y utiliza Handlebars como motor de plantillas.

## Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** con **Mongoose**
- **Passport.js** para autenticación local
- **bcrypt** para hashing de contraseñas
- **jsonwebtoken** para manejo de tokens JWT
- **Handlebars** como motor de plantillas

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-v1.git


## Rutas
src/app.js
src/config/bcryptUtils.js
src/config/connectMongodb.js
src/config/jwtUtils.js
src/config/middlewareAuth.js
src/config/passport.js
src/config/schemaUser.js
src/routes/sessions.js
src/routes/views.js
src/views/login.hbs
src/views/profile.hbs
src/views/register.hbs
src/views/layouts/main.hbs


## Rutas principales
- /register: Registro de nuevos usuarios.
- /login: Inicio de sesión.
- /profile: Perfil del usuario autenticado.
- /api/sessions: API para manejo de sesiones y tokens JWT.


## Vistas
- Login (src/views/login.hbs)
- Registro (src/views/register.hbs)
- Perfil (src/views/profile.hbs)


## Autenticación
Este proyecto utiliza Passport.js para la autenticación de usuarios y JWT para proteger las rutas de la API.