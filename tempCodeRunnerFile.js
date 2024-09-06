const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})















//arrays of element
let name=["ashish","happy","kushal","ashu"];
let salary=["45000","90000","55000","60000"];
let language=["python","javascprit","java","c++"];
let city=["una","pathankot","patiala","jalandher"];


//random number generater
let a= Math.floor(Math.random()*4)+1;
let b= Math.floor(Math.random()*4)+1;
let c= Math.floor(Math.random()*4)+1;
let d= Math.floor(Math.random()*4)+1;
let e=Math.floor(Math.random()*2);



//random element generater loops
let name1;
for (let index = 0; index < a; index++) {
   name1 = name[index];
  
}
let salary1;
for (let index = 0; index < a; index++) {
   salary1 = salary[index];
  
}
let language1;
for (let index = 0; index < a; index++) {
   language1 = language[index];
  
}
let city1;
for (let index = 0; index < a; index++) {
   city1 = city[index];
  
}
let ismanager;
if(e==0){

   ismanager=true;
}
else
{
  ismanager=false;
}


// function datagenrater(name1,salary1,language1,city1,ismanager)
// {
  
  
  
// }