import express from "express";


const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(cookieParser());

//routes
app.use("/user", userRoutes);
app.use("/post", postRoutes);

Connection();
app.listen(PORT, () => console.log(`server started on port ${PORT}`));