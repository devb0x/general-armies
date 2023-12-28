import mongoose from 'mongoose'

const armySchema = new mongoose.Schema({
	// _id: String,
	ownerId: String,
	name: String,
	faction: String,
	description: String,
	lore: String,
	units: Array
})

const Army = mongoose.models.Army || mongoose.model('Army', armySchema)

export default Army