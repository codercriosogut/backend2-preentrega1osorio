import { Router } from 'express';
import passport from 'passport';
import { generateToken } from '../config/jwtUtils.js';

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    const user = req.user;
    const access_token = generateToken(user); // test token
    res.status(201).send({ status: "success", message: "Usuario registrado", access_token });
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
        age: req.user.age
    }
    const access_token = generateToken(req.user); // test token
    res.send({ status: "success", payload: req.user, access_token });
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
