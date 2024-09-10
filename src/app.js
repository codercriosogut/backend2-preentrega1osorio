//clase5_integrative_practice 
import express from 'express';
import session from 'express-session';
import mongoose from './config/connect.js';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import sessionsRouter from './routes/sessions.js';



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
        mongoUrl: 'mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase5_integrative_practice?retryWrites=true&w=majority&appName=Cluster0',
    })
}))


initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/sessions', sessionsRouter);
app.use('/', viewsRouter);


app.listen(port, () => console.log(`Server running on port ${port}`))
