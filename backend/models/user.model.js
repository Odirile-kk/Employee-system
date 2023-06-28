const mongoose = require('mongoose')

const Emp = new mongoose.Schema({

userName: {type: String, required: true},
//unique will ensure theres no duplicate email
email: {type: String, required: true, unique: true},
pasword: {type: String, required: true},
qoute: {type: String},

},
{collection: 'emp-data'}
)

//model allows us to directly access and interact with mongoose
const model = mongoose.model('EmpData', Emp)

module.exports = model