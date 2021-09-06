const expres=require("express");
const cors=require("cors");

const port=8000;

var app=expres();

app.use(cors());
app.use(expres.json());

var useraction=require('./user_router')
app.use('/orders',useraction)


app.listen(port,()=>{
    console.log("server running at port "+port);
})