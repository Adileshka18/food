var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!";
    res.render('index', { title: 'Express', counter:req.session.counter });
    });

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход'});
    });
    
    /* POST login/registration page. */


/* POST login/registration page. */
router.post('./logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    console.log(username);
    console.log(password);
    });

module.exports = router;

// /*Страница macOS */
// router.get('/macOS', function(req, res, next) {
//   res.render('technology', {
//     title: "macOS",
//     picture:"images/macOS.png",
//     desc:"macOS — это операционная система, разработанная компанией Apple для своих компьютеров Mac.Она сочетает в себе элегантный дизайн, мощные функции и интуитивно понятный интерфейс, предоставляя пользователям уникальный опыт работы."
//   })
// });

// /* Страница Apple_watch */
// router.get('/Apple_watch', function(req, res, next) { 
//   res.render('technology', {
//     title: 'Apple_watch',
//     picture: "images/Apple_watch.png",
//     desc: "Apple Watch — это умные часы, разработанные компанией Apple, которые объединяют в себе стильный дизайн, передовые технологии и многофункциональность. Они предназначены для улучшения качества жизни пользователей, предоставляя удобный доступ к информации и функциям прямо на запястье."
//   })
// });

// /* Страница Iphone */
// router.get('/Iphone', function(req, res, next) {
//   res.render('technology', {
//     title: 'Iphone',
//     picture: "images/iphone.jpeg",
//     desc: "iPhone — это революционный смартфон, разработанный компанией Apple, который изменил представление о мобильных устройствах и стал символом инноваций и качества. С момента своего первого релиза в 2007 году, iPhone продолжает устанавливать стандарты в мире технологий."
//   })
// });


