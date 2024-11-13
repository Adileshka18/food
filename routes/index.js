var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница шашлыка*/
router.get('/shashlik', function(req, res, next) {
    res.send("<h1>Страница Шашлыка</h1>")
    });
    /* Страница суши*/
router.get('/susi', function(req, res, next) {
    res.send("<h1>Страница Суш</h1>")
    });
    /* Страница пицца*/
router.get('/pizza', function(req, res, next) {
    res.send("<h1>Страница Пиццы</h1>")
    });
    
module.exports = router;
