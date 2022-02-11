require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 5000
const sequelize = require('./db')

const app = express()

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
 start()