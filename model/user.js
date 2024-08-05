const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  //here we added unique: true which means username should be unique
  //mongoose will make single call to the db and if db accepts that means
  //username was unique if it rejects it means username isn't unique
  username: {type:String, required:true, unique:true},
  email: {type:String, required:true, unique:true},
  telephone: {type:String, required:true, unique:true},
  address: {type:String, required:true, unique:true},
  password: {type:String, required:true}
},
{collection:'users'}
);

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model;
