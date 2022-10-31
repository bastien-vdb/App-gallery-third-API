const express = require('express');
const app = express();
require('dotenv').config();
const cloudinary = require('cloudinary');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

cloudinary.config({
    cloud_name: process.env.CNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
    cloudinary.v2.api
        .resources()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err.message));
})

app.get('/:expression', (req, res, next) => {
    const expression = req.params.expression;
    cloudinary.v2.search
        .expression(expression)
        .with_field('context')
        .with_field('tags')
        .max_results(10)
        .execute()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => res.status(403).json(err.message));
})


app.get('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    cloudinary.v2.api.delete_resources(id)
        .then(()=>res.status(200).json('object deletd'))
        .catch(err => res.status(403).json(err.message));
})

app.post('/upload', upload.single('image'), (req, res, next) => {
    const file = req.file;
    cloudinary.v2.uploader.upload(file.path, {public_id: file.originalname})
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => res.status(403).json(err.message));
})

app.listen(process.env.PORT, () => {
    console.log(`server launched ${process.env.PORT}`)
})