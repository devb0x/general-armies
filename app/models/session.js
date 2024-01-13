import mongoose from 'mongoose'
import uniqueValidator from "mongoose-unique-validator"

const sessionSchema = new mongoose.Schema({
	email: { type: String, unique: true, required: true},
	value: { type: String },
	expires_at: { type: Date, required: true }
	// other fields...
})
sessionSchema.plugin(uniqueValidator);

const Schema = mongoose.models.Session || mongoose.model('Session', sessionSchema)

export default Schema
