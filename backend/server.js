const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'

/*
TODO: update NodeJS to 14 to use ECMAScripts import syntax on serverside
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products'

Also add '"type": "module",' to package.js below main
*/

const app = express()

app.use(express.json())

dotenv.config()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
