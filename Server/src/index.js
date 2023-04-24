const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { albumRouter } = require('./handlers/album')
const { mediaRouter } = require('./handlers/media')

const app = express()
const port = process.env.port || 3000
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.json({ 'message': 'success', 'url': request.url })
})

app.get('/api', (request, response) => {
    response.json({
        'message': 'Api is working..',
        'url': request.url
    })
})

// routers mapping.
app.use('/api/album', albumRouter)
app.use('/api/media', mediaRouter)

app.use('/*', (req, res) => {
    res.json({ error: 'not found' }).status(404)
})


// creating server
app.listen(
    port,
    () => {
        console.log(`app is listening on port ${port}`)
    }
)