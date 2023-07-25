var express = require("express");
var app = express();

const cardList = [ 
    {
        title: "Kitten 2",
        path: "images/kitten-2.jpg",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        path: "images/kitten-3.jpg",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
];

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.render('pages/index',{cats:cardList});
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});