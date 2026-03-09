import express from "express";
import apiRouter from "./routes/apiRoutes.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/", apiRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map