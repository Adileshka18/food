const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
 var Food = require('./models/food.js').Food
 var food  = new Food({
 title: "Шашлык",
 nick: "shashlik"
 })
 food.save();