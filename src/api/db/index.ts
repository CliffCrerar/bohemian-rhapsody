/**
 * Database access index
 */

// import * as express from 'express';
import env from 'dotenv';
import mongoose from 'mongoose';

const { Schema } = mongoose;

env.config();
const { MONGOHOST: host, MONGOPASSWORD: pw, MONGOUSER: usr } = process.env;

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
