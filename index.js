import express from 'express';
import connect from './db.js';

import rootRoutes from './src/routes/rootRoutes.js';

const app = express();

app.use(express.json());


app.use(rootRoutes);


app.get("/health-check", (req,res) => {
    res.send("Server is connecting")
});



app.listen(8080, () => {
    console.log("Starting with port 8080");
})