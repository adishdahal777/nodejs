
import {app} from './app.js'
import connectDB from './db/mongo.js'
import dotenv from 'dotenv'

dotenv.config()

connectDB()

app.listen(3000, () => {
    console.log("Server is running on pot 3000");
});