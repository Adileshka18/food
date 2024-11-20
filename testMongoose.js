const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Food = mongoose.model('Food', { name: String });
const dish = new Food({ name: 'шашлык' });
dish.save().then(() => console.log('нямням'));