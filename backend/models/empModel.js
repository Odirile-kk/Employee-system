const mongoose = require('mongoose')

const EmpList = new mongoose.Schema({
image: {type: String},
name: {type: String},
surname: {type: String},
email: {type: String},
role: {type: String},
bio: {type: String},
phone: {type: String}

},
{collection: 'emp-list'}
)

//model allows us to directly access and interact with mongoose
const model = mongoose.model('EmpList', EmpList)

module.exports = model