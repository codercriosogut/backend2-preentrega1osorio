import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    res.send({ status: "success", message: "usuario registrado" });

});


router.get('/failregister', async (req, res) => {
    console.log('estrategia fallida');
    res.send({ error: "Failed" });
});

router.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), async (req, res) => {
    if (!req.user) return res.status(400).send({ status: "error", error: "credenciales invalidas" });

    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        role: req.user.role,
        email: req.user.email,
        //
        age: req.user.age
    }
    res.send({ status: "success", payload: req.user });
});


router.get('/faillogin', (req, res) => {
    res.send("Login fallido");
});


router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send('Error al cerrar sesión');
        res.redirect('/login');
    });
});

export default router;
