const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require("./app");

dotenv.config({path:"./config.env"});

// const DB = process.env.DATABASE.replace(
//     '<PASSWORD>', 
//     process.env.DATABASE_PASSWORD);
const DB = process.env.DATABASE_LOCAL

mongoose.connect(DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("Successful Connection!!")
});



const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening to ${port}`)
});
