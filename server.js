
// import express from "express";
// import cors from 'cors';
// import { connectDB } from "./config/db.js";
// import foodRouter from './routes/foodRoute.js';
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config"
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // App configuration
// const app = express();
// const PORT = process.env.PORT || 4000; // Use the environment variable or default to 4000
// ;
// // Middleware
// app.use(express.json());
// app.use(cors());

// // DB connection
// connectDB();

// // API endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static('uploads')); // Serve images from 'uploads'
// app.use("/api/user",userRouter)
// app.use("/api/cart", cartRouter)
// app.use("/api/order", orderRouter)

// app.get("/", (req, res) => {
//     res.send("API WORKING KING");
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server started on http://localhost:${PORT}`);
// });


// import express from "express";
// import cors from 'cors';
// import { connectDB } from "./config/db.js";
// import foodRouter from './routes/foodRoute.js';
// import userRouter from "./routes/userRoute.js";
// import "dotenv/config";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";

// // App configuration
// const app = express();
// const port = process.env.PORT || 4000; // Ensure you're using Render's dynamic PORT

// // Middleware
// app.use(express.json());
// app.use(cors({
//     origin: ['https://amaphill-palace.web.app/'], // Replace with your frontend domain
//     credentials: true,
// }));

// // DB connection
// connectDB();

// // API endpoints
// app.use("/api/food", foodRouter);
// app.use("/images", express.static('uploads')); // Serve images from 'uploads'
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);

// app.get("/", (req, res) => {
//     res.send("API WORKING King");
// });

// // Start the server
// app.listen(port, '0.0.0.0', () => {
//     console.log(`✅ Server started on http://localhost:${port}`);
// });



import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from './routes/foodRoute.js';
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads')); // Serve images from 'uploads'
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API WORKING KING");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
