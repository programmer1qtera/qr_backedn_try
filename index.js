const express = require('express');
const dbConnect = require('./config/db_connect');
const app = express();
const dotenv = require('dotenv').config();

const userRoute = require('./router/user_routes');
const packageRouter = require('./router/package_routes')
const bodyParese = require('body-parser');
const { notFound, errorHandler } = require('./middleware/error_handler');
const PORT = process.env.PORT || 400;

dbConnect();
app.use(bodyParese.json());
app.use(bodyParese.urlencoded({
    extended: false
}));



app.use("/api/user",userRoute);
app.use("/api/package",packageRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server berjalan : ${PORT}`); 
})