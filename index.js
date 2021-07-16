const express=require('express');
const app=express();


app.get('/',(req,res)=>{
  res.send('Thank you for Calling ME')
})

app.listen(3000,()=>{console.log('listening  on port 3000');})