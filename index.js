const express=require('express');
const {urlRouter}=require('./routes/url');
const {shortURLRouter}=require('./routes/short-url')
const connectToDB=require('./connect')

app=express();
PORT=8000;

connectToDB('mongodb://127.0.0.1:27017/short-url').then(()=>console.log("DB Connected!"));

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));

app.use(express.json());
app.use('/url',urlRouter); 
app.use('/',shortURLRouter);