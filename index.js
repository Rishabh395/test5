 const express = require('express');
 const mongoose = require('mongoose');
 const cors = require('cors');
 const app = express();
 const user = require("./Schema")
  app.use(cors());
  app.use(express.json()); 


 app.post("/register" , async(req , resp)=>{
      
     const fet = new user(req.body);
     const result = await fet.save();
     resp.send(req.body);
 });

 app.post("/login" , async(req , resp)=>{
    let nuser= await user.findOne(req.body);
    if(req.body.email && req.body.password){
    if(nuser){
        resp.send(nuser);
    }
    else {
        resp.send('no user find');
    }
}
else 
resp.send('no user find');;
 })

 const connection_url = 'mongodb+srv://rishabh:rishabh1@cluster0.0u94ael.mongodb.net/?retryWrites=true&w=majority'
 
 const PORT = process.env.PORT || 5000 ;
 const path = require('path');


//  if(process.env.NODE_ENV=='production'){

    app.get('/' , (req , resp)=>{
        app.use(express.static(path.resolve(__dirname , 'inputbar'  , 'build') ));  
         resp.sendFile(path.resolve(__dirname , 'inputbar'  ,'build' , 'index.html'));

    })
//  }

 mongoose.connect(connection_url).then(()=>app.listen(PORT , ()=>console.log('server runnng ')));
 




