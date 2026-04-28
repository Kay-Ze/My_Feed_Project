const express = require('express')
const postModel = require('./model/post.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const upload = multer({storage: multer.memoryStorage()})


//POST
app.post('/create-post', upload.single('image'), async (req, res) => {
    
    const result = await uploadFile(req.file.buffer)

    await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    res.status(201).json({
        message: "Post created successfully",
        data: {
            image: result.url,
            caption: req.body.caption
        }
    })
})

//GET
app.get('/feed', async (req, res) => {
    const posts = await postModel.find()
    res.status(200).json({
        message: "Posts retrieved successfully",
        data: posts
    })
})

module.exports = app