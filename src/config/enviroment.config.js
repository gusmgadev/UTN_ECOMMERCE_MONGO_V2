import dotenv from "dotenv"

dotenv.config()

const ENVIROMMENT = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    GMAIL_USER: process.env.GMAIL_USER,
    URL_FRONT: process.env.URL_FRONT,
    API_KEY_INTERN : process.env.API_KEY_INTERN 

}

export default ENVIROMMENT