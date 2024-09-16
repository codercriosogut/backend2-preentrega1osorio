ver
12.09.24.11.13

-----------------------------------------------------------------------
1.REGISTRAR USUARIO - REGISTER
-----------------------------------------------------------------------

http://localhost:8080/register (register.hbs)
Registro - Administrador
Nombre: 
 Apellido: 
 Email: 
 Rol: 
 Contraseña: 
 Registrarse
Iniciar sesión
--
Registrarse - salta a:
--
http://localhost:8080/api/sessions/register (sessions.js)
{
  "status": "success",
  "message": "usuario registrado"
}
--
se actualiza
--
Restarting 'src/app.js'
Server running on port 8080
Connected to MongoDB
el usuario existe
--
http://localhost:8080/failregister
Cannot GET /failregister
--
(sessions.js)
router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    res.send({ status: "success", message: "usuario registrado" });

});
--
debiera de solo mostrar una ventana que el usuario se ha registrado
luego debiera de saltar a Login.
--
http://localhost:8080/login
--





-----------------------------------------------------------------------
INICIO DE SESION - no registrado
-----------------------------------------------------------------------
Inciar sesion: (login.hbs)
http://localhost:8080/login
--
Iniciar Sesión - Correo+Password
Email: 
alexander@emailcom
 Contraseña: 
•••
 Ingresar
Registrarse
---
Restarting 'src/app.js'
Server running on port 8080
Connected to MongoDB
el usuario no existe
---
salta a :
http://localhost:8080/faillogin
--
Cannot GET /faillogin
--
este debiera de mostrar una mensaje 
y redirigir a 
http://localhost:8080/login
(login.hbs)
-----------------------------------------------------------------------
-----------------------------------------------------------------------
-----------------------------------------------------------------------
-----------------------------------------------------------------------

-----------------------------------------------------------------------
INICIO DE SESION - no registrado
-----------------------------------------------------------------------
Inciar sesion: (login.hbs)
http://localhost:8080/login
--
Iniciar Sesión - Correo+Password
Email: 
alex@email.com
 Contraseña: 
•••
 Ingresar
Registrarse
--
http://localhost:8080/api/sessions/login
--
{
  "status": "success",
  "payload": {
    "_id": "66e2d61d9c616b481002346e",
    "first_name": "alexander",
    "last_name": "osorio",
    "email": "alex@email.com",
    "role": "administrador",
    "password": "$2b$10$wzOm3w7mFwhq5gpbAK8dg.Ya9o3SCWFTldWpekA9EWxdSPNgPKcNW",
    "__v": 0
  }
}
--
me debiera de mostrar este contenido en una ventana
y redirigirme a 
--
http://localhost:8080/profile
--
Perfil del Usuario - Registro
Nombre: alexander
Apellido: osorio
Email: alex@email.com
Rol: administrador
Cerrar Sesión
--
al actualizar
--
se mantiene en la pagina web
--
al intentar ingresar a:
http://localhost:8080/login
http://localhost:8080/register
--
se actualiza a:
--
http://localhost:8080/profile
--
al cerrar sesion:
--
se redirige a 
http://localhost:8080/login
--








resultado inicio sesion: 
http://localhost:8080/api/sessions/login
{
  "status": "success",
  "payload": {
    "_id": "66e1c0225b5bbbc3970f021b",
    "first_name": "cristian",
    "last_name": "osorio",
    "email": "cosorio@hotmail.cl",
    "role": "Informatico",
    "password": "$2b$10$e0hggU1mBEu2AfnG0yELcupzh2HwsP/P.fBEbHPvR/aWG4McsviQK",
    "__v": 0
  }
}

---
deberia saltar a profile
---



http://localhost:8080/profile (profile.hbs)
Perfil del Usuario
Nombre: cristian
Apellido: osorio
Email: cosorio@hotmail.cl
Rol: Informatico
Cerrar Sesión


Cerrar usuario: (login.hbs)
http://localhost:8080/login




despues de ser registrado
debe redirigir a inicias sesion - login
http://localhost:8080/login (login.hbs)






http://localhost:8080/api/sessions/register






//
npm install bcrypt bcryptjs connect-mongo express express-handlebars express-session mongoose passport passport-local jsonwebtoken

11.09.24.22.06


12.09.24.1543
jsonwebtoken

localhost:8080/register
name
email
password


token
{
"access_token": "XXXX"
}


localhost:8080/login
{
"access_token": "XXXX"
}


//


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


testing

POST localhost:8080/register

body/raw/json

{
    "name": "cris",
    "email": "correo@correo.cl",
    "password": "123"
}

body 

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJjcmlzIiwiZW1haWwiOiJjb3JyZW9AY29ycmVvLmNsIiwicGFzc3dvcmQiOiIxMjMifSwiaWF0IjoxNzI2MjQyOTY3LCJleHAiOjE3MjYzMjkzNjd9.erFhsaUQ-JwthNGORbVDTZSbnPsdoCnnckpMCUs_cJ4"
}

//
enviar nuevamente
//
{
    "error": "El usuario ya existe"
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

GET localhost:8080/current

Authorization
Type 
Bearer Token
Token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJjcmlzIiwiZW1haWwiOiJjb3JyZW9AY29ycmVvLmNsIiwicGFzc3dvcmQiOiIxMjMifSwiaWF0IjoxNzI2MjM5Mjk2LCJleHAiOjE3MjYzMjU2OTZ9.UWotUuNmGx6atv0SQ4l6v8qrjbV1AXb0iamqBHQaPuM

{
    "status": "success",
    "payload": {
        "name": "cris",
        "email": "correo@correo.cl",
        "password": "123"
    }
}




REGISTRO POR POSTMAN
{
    "first_name": "test1",
    "last_name": "test1",
    "email": "test1@email.com",
    "age": "40",
    "role": "administrador",
    "password": "123"
}



16.09.24.1336
nuevos cambios
{
  "status": "success",
  "message": "Usuario registrado",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJheGwiLCJsYXN0X25hbWUiOiJheGwiLCJlbWFpbCI6ImF4bEBlbWFpbC5jb20iLCJhZ2UiOjQwLCJyb2xlIjoidXNlciIsInBhc3N3b3JkIjoiJDJiJDEwJDVTLjlvNEg0Y1JrZWZ2OUVoUkQxTS5oazlDSE9welpubnRNaVRkQ1F5Q3pwaS8uNExsLm5pIiwiX2lkIjoiNjZlODVlNTk4ZjczMWY3YzYwY2JhZTk1IiwiX192IjowfSwiaWF0IjoxNzI2NTA0NTM3LCJleHAiOjE3MjY1OTA5Mzd9.BtUInsiZS3Sbo7qMC5T2zJ2b6fLnhRBmzhdaNJp1gk4"
}

