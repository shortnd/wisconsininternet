const nodemailter = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');

const transporter = nodemailter.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

const generateHTML = (filename, options = {}) => {
    const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options);
    const inlined = juice(html);
    return inlined;
}

export default async (req, res) => {
    if (req.method === 'POST') {
        if (!req.body.firstName) {
            return res.status(400).json({ message: "First Name is required" });
        }
        if (!req.body.lastName) {
            return res.status(400).json({ message: "Last Name is required" });
        }
        if (!req.body.email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!req.body.phoneNumber) {
            return res.status(400).json({ message: "Phone number is required" });
        }
        if (!req.body.address) {
            return res.status(400).json({ message: "Street Address is required" });
        }
        if (!req.body.city) {
            return res.status(400).json({ message: "City is requried" });
        }
        if (!req.body.state) {
            return res.state(400).json({ message: "State is required" });
        }
        if (req.body.state.toUpperCase() !== "WI") {
            return res.state(400).json({ message: "We currently not support other states" });
        }
        const html = generateHTML("contact_us", {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            business: req.body.business,
            currentProvider: req.body.currentProvider,
            currentSpeed: req.body.currentSpeed,
            computerMaintenance: req.body.computerMaintenance
        })
        const mailOptions = {
            from: req.body.email,
            to: process.env.MAIL_USER,
            subject: "Wisconsin Internet - Contact Us",
            html,
            text
        }
        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            method: req.method,
        })
    } else {
        return res.status(200).json({
            method: 'GET',
        })
    }
}
