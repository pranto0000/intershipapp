require('dotenv').config()
const express = require('express')
const app = express()
require('./db/conn.js')
const cors = require('cors')
const router = require("./Routes/router.js")
const PORT = process.env.PORT || 6010

app.use(cors())
app.use(express.json())
app.use("/uploads",express.static("./uploads"))
app.use("/files", express.static("./public/files"))


app.use(router)



app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})