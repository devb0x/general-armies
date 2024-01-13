import mongoose from 'mongoose'
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new mongoose.Schema({
	username: { type: String, unique: true, required: true},
	email: { type: String, unique: true, required: true},
	password: {type: String, required: true}
	// other fields...
})
userSchema.plugin(uniqueValidator);

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
