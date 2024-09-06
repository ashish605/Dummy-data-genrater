const express = require('express')
const mongoose = require('mongoose');
const app = express();
const employee = require("./models/employee")   //fetching schema modle


mongoose.connect('mongodb://127.0.0.1:27017/company');  //connecting to mongoose dataserver
const port = 3000;  //setting the port
app.set('view engine', 'ejs');       //startiing ejs engin
 

app.get('/', (req, res) => {                       //showing the ejs template in the loacl server
    res.render('index', {foo: 'FOO'});
  });

app.get('/genrate',async (req, res) => {                           //craete a template

    await employee.deleteMany({})  //deleting the excisting records
       
    // arrays of element
    let name = ["ashish", "happy", "kushal", "ashu"];
    let salary = ["45000", "90000", "55000", "60000"];
    let language = ["python", "javascprit", "java", "c++"];
    let city = ["una", "pathankot", "patiala", "jalandher"];


    for (let index = 0; index < 10; index++) {

        //random number generater
        let a = Math.floor(Math.random() * 4) + 1;
        let b = Math.floor(Math.random() * 4) + 1;
        let c = Math.floor(Math.random() * 4) + 1;
        let d = Math.floor(Math.random() * 4) + 1;
        let f = Math.floor(Math.random() * 2);



        //random element generater loops
        let name1;
        for (let index = 0; index < a; index++) {
            name1 = name[index];

        }
        let salary1;
        for (let index = 0; index < b; index++) {
            salary1 = salary[index];

        }
        let language1;
        for (let index = 0; index < c; index++) {
            language1 = language[index];

        }
        let city1;
        for (let index = 0; index < d; index++) {
            city1 = city[index];

        }
        let ismanager1;
        if (f == 0) {

            ismanager1 = true;
        }
        else {
            ismanager1 = false;
        }

        let e =await employee.create({        //creating the 10 random records
            name: name1,
            salary: salary1,
            language: language1,
            city: city1,
            ismanager: ismanager1
        })

    }

    res.render('index', { foo: 'FOO' });            //callng the index.
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



