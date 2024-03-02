const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sarpalkunal7:kunal1234@cluster1.pc6dcst.mongodb.net/');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);
;
