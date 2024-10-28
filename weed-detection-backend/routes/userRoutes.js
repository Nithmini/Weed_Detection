const router = require("express").Router();
let User = require("../models/user");
const bcrypt = require('bcrypt');

router.route("/add").post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add all fields" });
    }

    try {
        const savedUser = await User.findOne({ email });
        if (savedUser) {
            return res.status(422).json({ error: "User already exists with that email" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });

        await newUser.save();
        return res.status(201).json({ message: "User added successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to register user" });
    }
});


router.route("/log").post(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Please provide both email and password" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Password matches, return user object along with userType
        res.status(200).json({ user, userType: user.userType });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;