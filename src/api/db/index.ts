/**
 * Database access index
 */

// import * as express from 'express';
import env from 'dotenv';
import mongoose from 'mongoose';

const { Schema } = mongoose;

env.config();
const { MONGOHOST: host, MONGOPASSWORD: pw, MONGOUSER: usr } = process.env;
console.log('usr: ', usr);
console.log('pw: ', pw);
console.log('host: ', host);
console.log('MONGOUSER: ', MONGOUSER);
console.log('MONGOPASSWORD: ', MONGOPASSWORD);
console.log('MONGOHOST: ', MONGOHOST);

const mongoUri = `mongodb+srv://${usr}:${pw}@${host}/boraps`;
mongoose.connect(mongoUri, { useUnifiedTopology: true });

const usersSchema = new Schema({
    username: String,
    password: String,
    date: { type: Date, default: new Date() }
});

const albumSchema = new Schema({
    // TODO:
});

const artistSchema = new Schema({
    // TODO:
});

const genreSchema = new Schema({
    // TODO:
});

const librarySchema = new Schema({
    // TODO:
})


export { usersSchema };
