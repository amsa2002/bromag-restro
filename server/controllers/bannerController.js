const Banner = require('../modals/bannerModal.js')

const getBanner =  async (req, res) => {
    try {
        const banners = await Banner.find()
        res.status(200).json(banners)
    } catch (error) {
        res.status(500).json({message:'Failed to fetch banners'})    
    }
}

const addBanner = async (req, res) => {
    const {context} = req.body
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/banners/${req.file.filename}`

    try {
        const newBanner = new Banner ({ imageUrl, context,})
        await newBanner.save()
        res.status(200).json(newBanner)
    } catch (error) {
        res.status(500).json({message:'Failed to add banner'})
    }
}

const deleteBanner = async (req, res) => {
    const banner = await Banner.findById(req.params.id)
    try {
        if(!banner){
            console.log('banner is not exist')
            return res.status(404).json({message:'banner not found'})
        }
        await banner.deleteOne()
        res.json({message:'Banner deleted successfully'})
    } catch (error) {
        res.status(500).json({message:'Failed to delete banner'})
    }
    
}

module.exports = {getBanner, addBanner, deleteBanner}