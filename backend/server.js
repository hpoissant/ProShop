const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const { connect } = require('mongoose')

const productRoutes = require('./routes/productRoutes')

/*
TODO: update NodeJS to 14 to use ECMAScripts import syntax on serverside
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products'

Also add '"type": "module",' to package.js below main
*/

const app = express()

dotenv.config()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
