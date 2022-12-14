import { app } from "./controller/app";
import express from "express";
import cors from "cors";
import { postRouter } from "./business/routes/PostRouter";
import { historyRouter } from "./business/routes/HistoryRouter";



app.use(express.json());
app.use(cors());

app.use("/posts", postRouter)
app.use("/history", historyRouter)



