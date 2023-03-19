const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");



router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already exists!" });



		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex")
		}).save();

		const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
		console.log(url);
		await sendEmail(user.email,url);

		res.status(201).send({ message: "An email has been sent to your account. Please verify your email address." });
	}
	catch (error) {
		console.error(error);
		res.status(500).send({ message: "Internal Server Error: Email Log" });
	}
});




router.get("/:id/verify/:token", async (req, res) => {
	try{
		const user = await User.findById(req.params.id);
		if(!user) {
			console.log("Invalid user ID");
			return res.status(400).send({message:"Invalid Link"});
		}
		const token = await Token.findOne({userId:user._id,token:req.params.token});
		if(!token) {
			console.log("Invalid token");
			return res.status(400).send({message:"Invalid Link"});
		}
		await User.updateOne({_id:user._id},{$set:{verified:true}});
		await Token.deleteOne({_id: token._id})

		console.log(`User ${user._id} has been verified`);
		res.status(200).send({message:"Account Verified"})
	} catch(error){
		console.error(`Error verifying user: ${error.message}`);
		res.status(500).send({ message: "Internal Server Error: Verification" });
	}
});


module.exports = router;