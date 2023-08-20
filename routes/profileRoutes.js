const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
	res.send(
		"Please provide a profile ID as a param to fetch the profile information!"
	);
});

//profile will only have one route

router.route("/:id").get((req, res) => {
	res.status(200).json({ comment: "Fetch one comment" });
});
router.route("/").post((req, res) => {
	res.status(200).json({ comment: "create a comment" });
});
router.route("/:id").put((req, res) => {
	res.status(200).json({ comment: `Update comment ${req.params.id}` });
});
router.route("/:id").delete((req, res) => {
	res.status(200).json({ comment: `Delete comment ${req.params.id}` });
});

module.exports = router;
