const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/userRoute')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(express.json());
app.use(cors())

app.use('/api', router)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.error(err))


const PORT = process.env.PORT

app.listen(PORT, ()=>{`Server is running on PORT:${PORT}`})