import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

/// router import
import userRoutesr from './routes/user.routes.js'


// route declaration
app.use('/api/v1/users',userRoutesr)
export default app
