const express = require("express");
const {
	getComment,
	createComment,
	getAllComments,
	updateComment,
	deleteComment,
	getAllMovieComments,
} = require("../controllers/commnetController");
const router = express.Router();

//since these all has the same route so instead of writing it multiple time this is a shortcut
router.route("/").post(createComment).get(getAllComments);

router
	.route("/:id")
	.get(getAllMovieComments)
	.get(getComment)
	.put(updateComment)
	.delete(deleteComment);

module.exports = router;
