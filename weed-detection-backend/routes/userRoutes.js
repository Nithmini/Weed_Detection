const router = require("express").Router();
let User = require("../models/user");
const bcrypt = require('bcrypt');

// Add User
router.route("/add").post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add all fields" });
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists with that email" });
            }

            const newUser = new User({ email, password });

            newUser.save()
                .then(() => {
                    return res.status(201).json({ message: "User added successfully" });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(500).json({ error: "Failed to register user" });
                });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ error: "Server error" });
        });
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