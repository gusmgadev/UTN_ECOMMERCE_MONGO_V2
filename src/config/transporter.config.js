import nodemailer from "nodemailer";
import ENVIROMMENT from "./enviroment.config.js";
//
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:ENVIROMMENT.GMAIL_USER,
        pass:ENVIROMMENT.GMAIL_PASSWORD
    }

    })

export default transporter;