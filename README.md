Inciar sesion: (login.hbs)
http://localhost:8080/login
-
Iniciar Sesión - Correo+Password
Email: 
dosorio@email.com
 Contraseña: 
•••
 Ingresar
Registrarse
---
salta a:
---

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


-----------------------------------------------------------------------
1.REGISTRAR USUARIO
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
salta a:
--
http://localhost:8080/api/sessions/register (sessions.js)
{
  "status": "success",
  "message": "usuario registrado"
}
--
se actualiza
--
http://localhost:8080/failregister
Cannot GET /failregister




(sessions.js)
router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    res.send({ status: "success", message: "usuario registrado" });

});
-----------------------------------------------------------------------
despues de ser registrado
debe redirigir a inicias sesion - login
http://localhost:8080/login (login.hbs)






http://localhost:8080/api/sessions/register






//
npm install bcrypt bcryptjs connect-mongo express express-handlebars express-session mongoose passport passport-local

11.09.24.22.06
