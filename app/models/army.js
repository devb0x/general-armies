import mongoose from 'mongoose'

const armySchema = new mongoose.Schema({
	name: String,
	ownerId: String,
})

const Army = mongoose.models.Army || mongoose.model('Army', armySchema)

export default Army