/**
 * Database access index
 */

// import * as express from 'express';
import env from 'dotenv';
import mongoose from 'mongoose';

const { Schema } = mongoose;

env.config();

mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true });

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
