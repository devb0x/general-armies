import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		}
	},
	{ timestamps: true }
);

const Schema = mongoose.models.Post || mongoose.model('Post', postSchema)

export default Schema