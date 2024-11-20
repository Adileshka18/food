const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.niam = function(){
console.log(this.name + " очень вкусный")
}
const Food = mongoose.model('Food', schema);
const dish = new Food({ name: 'Шашлык' });
dish.save().then(() => dish.niam());
