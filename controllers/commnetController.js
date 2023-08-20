const asyncHandler = require("express-async-handler");
const CommentModel = require("../models/commentModel");
const commentModel = require("../models/commentModel");

//get all the comments
//route GET api/comments
const getAllComments = asyncHandler(async (req, res) => {
	const comments = await CommentModel.find();
	res.status(200).json(comments);
});
//get all the comments
//route GET api/comments
const getAllMovieComments = asyncHandler(async (req, res) => {
	const comments = await CommentModel.find({ movieId: req.params.id });
	res.status(200).json(comments);
});

//get one comment
//route GET /api/comments/:id
const getComment = asyncHandler(async (req, res) => {
	const comments = await commentModel.findOne({ movieId: req.params.id });
	if (!comments) {
		res.status(404);
		throw new Error("comments not found");
	}
	res.status(200).json(comments);
});

//create a comment
//route POST /api/comments/:id
const createComment = asyncHandler(async (req, res) => {
	const { uId, name, movieId, comments, reviews } = req.body;
	//error handling
	// if name or userID, or comment is absent from the client side, this will throw error
	if (!name || !uId || !comments || !movieId || !reviews) {
		res.status(400);
		throw new Error("all fields are necessary!");
	}
	const comment = await CommentModel.create({
		uId,
		name,
		movieId,
		comments,
		reviews,
	});
	console.log(req.body, "req body Post");
	res.status(201).json(comment);
});

//create a comment
//route POST /api/comments/:id
const updateComment = asyncHandler(async (req, res) => {
	const { _id, comments, reviews } = req.body;

	const updatedComments = await commentModel.findOneAndUpdate(
		{
			_id,
		},
		{ comments, reviews }
	);
	if (!comments) {
		res.status(404);
		throw new Error("comments did not updated");
	}
	res.status(200).json(updatedComments);
});

//create a comment
//route POST /api/comments/:id
const deleteComment = asyncHandler(async (req, res) => {
	const { id } = req.params.id;

	const deleteComment = await commentModel.findOneAndDelete({ id });

	if (!deleteComment) {
		res.status(404);
		throw new Error("comments did not deleted");
	}
	res.status(200).json(deleteComment);
});

module.exports = {
	getAllComments,
	getAllMovieComments,
	getComment,
	createComment,
	updateComment,
	deleteComment,
};
