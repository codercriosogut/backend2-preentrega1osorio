import express from 'express';
import session from 'express-session';
import { engine } from 'express-handlebars';
import mongoose from './config/connectMongodb.js';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import sessionsRouter from './routes/sessions.js';
import viewsRouter from './routes/views.js';
import initializePassport from './config/passport.js';


const app = express()
const port = 8080

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase7_entrega1?retryWrites=true&w=majority&appName=Cluster0',
    })
}))


initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/sessions', sessionsRouter);
app.use('/', viewsRouter);


app.listen(port, () => console.log(`Server running on port ${port}`))