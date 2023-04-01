const express = require('express');
const dotenv =require('dotenv');
const app = express();
const bodyparser = require('body-parser');



dotenv.config({path:'config.env'});
const PORT = process.env.PORT||8080

app.get('/',(req,res)=>{
res.render('index');
})
app.use(bodyparser.urlencoded({extended:true}))

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});

