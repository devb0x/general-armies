import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: String
	// other fields...
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
