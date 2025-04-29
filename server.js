import express from "express"
import dotenv from "dotenv"
import { indexRouter } from "./routers/indexRouter.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "public");

const app = express();


dotenv.config();
const port = process.env.PORT;

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");
app.use(express.static(assetsPath))

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)

app.use("*", (req, res)=>{
    res.send("No Such Page Go Back.")
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})