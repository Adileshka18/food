var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.greeting = "Hi!!!";
    res.render('index', { title: 'Express', counter:req.session.counter });
    });

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход', error: null});
    });
    
    


/* POST login/registration page. */
router.post('/logreg', async function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    console.log(username);
    console.log(password);
    var users = await User.find({username: username});
    console.log(users);
    if (!users.length) {
        // res.send("<h1>Пользователь НЕ найден</h1>");
        var user = new User({username:username,password:password})
        await user.save();
        req.session.user_id = user._id;
        res.redirect('/');
    } else {
        // res.send("<h1>Пользователь найден</h1>");
        var foundUser = users[0];
        if(foundUser.checkPassword(password)){
            req.session.user_id = foundUser._id
            res.redirect('/')
        } else {
            res.render('logreg',{title: 'Вход', error: 'Пароль не верный'});
        }

    }
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
    req.session.destroy();
    res.locals.user = null;
    res.redirect('/');
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


