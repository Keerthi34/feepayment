var mongoose=require('mongoose');

var Schema = mongoose.Schema;


var schema= new Schema({
  "Student_Id":{type:String},
  "Student_Type":{type:String},
  "SNo":{type:String},
    "Total_Fee" : {type:String},
    "Fee_Paid":{type:String},
    "Date":{type:String},
    "Description":{type:String},
    "Pending_Fee":{type:String}


})

module.exports=mongoose.model('feedetails',schema);
