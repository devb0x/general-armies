import mongoose from "mongoose"

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		console.log("mongo connection successful")
	} catch (error) {
		throw new Error("Error in connecting to mongodb..")
	}
}

export default connect
