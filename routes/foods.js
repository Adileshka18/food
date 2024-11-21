var express = require('express');
var router = express.Router();
var Food = require('../models/food').Food;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с foods');
});

/* Страница музыки */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });

    router.get("/:nick", async function(req, res, next) {
        var foods = await food.find({nick: req.params.nick});
        console.log(musics)
        if(!musics.length) return next(new Error("Нет такого блюда"))
        var food = foods[0];
        res.render('food', {
        title: food.title,
        picture: food.avatar,
        desc: food.desc
        })
        });    

module.exports = router;