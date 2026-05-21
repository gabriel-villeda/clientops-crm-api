import express from 'express';
import apiRouter from './routes/index.js';

const app = express();

app.use(express.urlencoded({ extended: true })); //Parses Data coming from standardHTML

app.use(express.json()); /*When payload in JSON format, 
it tells express to look for them and parses into JavsaScript object like req.bod*/

app.use(express.static("public"));//If images are uploaded through here, anyone has access through URL.
app.use("/api/v1", apiRouter);//If request starts with this, hand it to apiRouter.

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
    });
});// It handles errors in an organized way instead of hanging or generic errors.

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server Ready! Use http://localhost:${port}`);
});

