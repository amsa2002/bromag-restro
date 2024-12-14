const About = require('../modals/aboutUsModal.js')

const  getAbout = async (req, res) => {
    try {
        const about = await About.find()
        res.status(200).json(about)
    } catch (error) {
        console.error('server error', error.message)
        res.status(500).json({message:'server error. failed to fetch about'})
    }
}

const addAbout = async (req, res) => {
    try {
        const about = new About (req.body)
        await about.save()
        res.status(200).json({message:'About Added Successfully'})
    } catch (error) {
        console.error('validation error', error.message)
        res.status(400).json({message:'Failed to add about'})
    }
}

const editAbout = async (req, res) => {
    try {
        const about = await About.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!about){
            return res.status(404).json({message:'About not found'})
        }
        res.status(200).json(about)    
    } catch (error) {
        console.error('Update error', error.message)
        res.status(500).json({message:'server error. Failed to update about'})
    }
}

const deleteAbout = async (req,res) => {
    try {
       const about =  await About.findByIdAndDelete(req.params.id)
        if(!about){
            return res.status(404).json({message:'about not found'})
        }
        res.status(200).json({message:'About deleted successfully'})
    } catch (error) {
        console.error('Delete error', error.message)
        res.status(500).json({message:'server error. Failed to delete banner'})   
    }
}

module.exports = {getAbout, addAbout, editAbout, deleteAbout}