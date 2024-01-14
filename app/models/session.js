import mongoose from 'mongoose'
import uniqueValidator from "mongoose-unique-validator"

const sessionSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true},
	value: { type: String },
	startedAt: { type: Date, required: true },
	expireAt: {
		type: Date, default: Date.now() + 100
	}
	// other fields...
})

sessionSchema.plugin(uniqueValidator)
// Session.createIndex({createdAt: 1}, {expireAfterSeconds: 60})


const Schema = mongoose.models.Session || mongoose.model('Session', sessionSchema)

export default Schema
