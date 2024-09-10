//clase5_integrative_practice 
import express from 'express';
import session from 'express-session';
import mongoose from './config/connect.js';
import MongoStore from 'connect-mongo';

const app = express()
const port = 8080

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

app.listen(port, () => console.log(`Server running on port ${port}`))
//test
//test2