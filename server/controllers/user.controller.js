const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register(req, res) {
        User.create(req.body)
            .then(newUser => {
                const token = jwt.sign({
                    id: newUser._id,
                    email: newUser.email
                }, process.env.SECRET_KEY);
                res.cookie('token', token, {
                    httpOnly: true
                })
                    .json({ status: 'Success' })
            })
            .catch(err => res.status(400).json(err));
    },

    async login(req, res) {
        const { email, password } = req.body;
        const errorMessage = "Please check your email and password."
        try {
            const user = await User.findOne({ email });

            if (user === null) {
                throw new Error(errorMessage);
            }

            const result = await bcrypt.compare(password, user.password);

            if (result === false) {
                throw new Error(errorMessage);
            }

            const token = jwt.sign({
                id: user._id,
                email: user.email
            }, process.env.SECRET_KEY);

            res.cookie('token', token, {
                httpOnly: true
            });

            res.json({ status: 'Success', token });

        } catch (e) {
            res
                .status(400)
                .json({ message: "errorMessage" })
        }
    },

    logout(req, res) {
        res.clearCookie('token');
        res.json({ status: 'Success' });
    }
}