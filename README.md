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
npm install bcrypt bcryptjs connect-mongo express express-handlebars express-session mongoose passport passport-local

11.09.24.22.06
