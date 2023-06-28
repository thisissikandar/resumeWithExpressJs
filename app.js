import express from "express"
import router from "./routes/index.js"
import { join } from "path";
const app = express();
const port = process.env.PORT || "8000"

// MIDDLEWARE
// Set Template Engine
app.set('view engine', 'ejs')

// Set Static Files
app.use(express.static( 'public'))

// load routes
app.use("/", router)

// LISTENING Port
app.listen(port, (req, res)=>{
    console.log(`App listening on http://localhost:${port}`);
})