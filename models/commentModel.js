const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
	{
		uId: {
			type: String,
			required: [true, "uid needed"],
		},
		name: {
			type: String,
			required: [true, "Please add your name"],
		},
		movieId: {
			type: String,
			required: [true, "Please add your comment id"],
		},
		comments: {
			type: String,
			required: [true, "Please add your comments"],
		},
		reviews: {
			type: Number,
			required: [true, "Please add your reviews"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Comment", commentSchema);
