import express, { response } from "express"
import ENVIROMMENT from "./config/enviroment.config.js"
import connectDB  from "./db/config.js"
import cors from "cors"
const app = express()

const PORT = ENVIROMMENT.PORT || 3000


import statusRouter from "./routers/status.router.js"
import authRouter from "./routers/auth.router.js"
import productsRouter from "./routers/products.router.js"


app.use(cors())
app.use(express.json())
//app.use(verifyApiKeyMiddleware) 


app.use("/api/status",statusRouter)
app.use("/api/auth",authRouter)
app.use("/api/products",productsRouter)

app.get("/", (req, res) => {
    res.send("RAIZ OK")
})



app.listen(PORT, ()=> console.log("El servidor esta funcionando  running on port "+PORT))