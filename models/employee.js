const mongoose=require('mongoose');
const employeeSchema = new mongoose.Schema({            //creting the schema modle
    name: String,
    salary:Number,
    language:String,
    city:String,
    ismanager:Boolean
  });

  const Employee = mongoose.model('employee', employeeSchema);  //putting the scehma in employee
  module.exports= Employee;    //exportig th scehma