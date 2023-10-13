import express from 'express'

import mongoose from 'mongoose'

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://ti0:a@cluster0.rxvvsfr.mongodb.net/?retryWrites=true&w=majority")
        console.log("db connected")
    } catch (error) {
        console.log("Could not connect to db   ",error);
        process.exit(1);
    }
    
}

export default connect;