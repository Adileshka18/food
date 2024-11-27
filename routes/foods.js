var express = require('express');
var router = express.Router();
var Food = require('../models/food').Food;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с foods');
});

router.get("/:nick", async function (req, res, next) {
  var foods = await Food.find({ nick: req.params.nick });
  console.log(foods)
  if (!foods.length) return next(new Error("Нет такого блюда"))
  var food = foods[0];
  res.render('food', {
    title: food.title,
    picture: food.avatar,
    desc: food.desc
  })
});

module.exports = router;