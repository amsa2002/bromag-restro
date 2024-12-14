const express = require('express')
const multer = require('multer')
const {getBanner, addBanner, deleteBanner } = require('../controllers/bannerController.js')

const router = express.Router()

//multer storage configuration

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb (null, './uploads/banners'),
    filename: (req, file, cb) => cb (null, Date.now() + '-' + file.originalname)
})
const upload = multer({storage})

//routes
router.get('/', getBanner)
router.post('/', upload.single('image'), addBanner)
router.delete('/:id', deleteBanner)

module.exports= router