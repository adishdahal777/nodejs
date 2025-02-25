import express from "express";
import cors from "cors";
const app = express();

import { router } from "./routes/web.js";

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(
    express.json({
        limit: "16kb",
    })
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);

app.use('/api', router);
app.use(express.static("public"));



export { app };
