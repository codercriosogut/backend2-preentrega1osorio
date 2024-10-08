import passport from "passport";
import local from "passport-local";
import userService from './schemaUser.js';
import { createHash, isValidPassword } from './bcryptUtils.js';

const localStrategy = local.Strategy;
const initializePassport = () => {
    passport.use('register', new localStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    }, async (req, username, password, done) => {
        const { first_name, last_name, email, age, role } = req.body;
        try {
            let user = await userService.findOne({ email: username });
            if (user) {
                console.log("el usuario existe")
                return done(null, false);
            }
            const newUser = {
                first_name,
                last_name,
                email,
                age,
                role,
                password: createHash(password)
            }
            let result = await userService.create(newUser);
            return done(null, result);
        } catch (error) {
            return done("error al obtener el usuario" + error);
        }
    }
    ))

    passport.serializeUser((user, done) => {
        done(null, user._id);
    })
    passport.deserializeUser(async (id, done) => {
        let user = await userService.findById(id);
        done(null, user);
    })

    passport.use('login', new localStrategy({ usernameField: 'email' }, async (username, password, done) => {
        try {
            const user = await userService.findOne({ email: username });
            if (!user) {
                console.log("el usuario no existe")
                return done(null, false);
            }
            if (!isValidPassword(user, password)) return done(null, false);
            return done(null, user);

        } catch (error) {
            return done(error);
        }
    }))

}

export default initializePassport