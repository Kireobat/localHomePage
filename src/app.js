//------------------Imports------------------//

const fs = require('fs');
const path = require('path');
const express = require('express');
const hbs = require('hbs');

//------------------Variables------------------//

const dataPath = path.join(__dirname, '../data');
const viewPath = path.join(__dirname, '../views/pages');
const partialsPath = path.join(__dirname, '../views/pages/partials');
const publicDirPath = path.join(__dirname, '../public');
const port = 80;
const app = express();

//------------------Setup------------------//

app.set('views',viewPath);
app.set('view engine', hbs);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirPath));


//------------------Load data------------------//

function loadData() {
    const dataBuffer = fs.readFileSync(dataPath+'/data.json');
    const dataJSON = dataBuffer.toString();
    console.log(JSON.parse(dataJSON));
    return JSON.parse(dataJSON);
}

let data = loadData();

//------------------Routes------------------//

function rootRoute(req, res) {
    res.render('index.hbs', {
        title: data.title,
        desc: "Home",
        
    });
}

function dessertRoute(req, res) {
    res.render('link.hbs',{
        title: data.title,
        desc: "Shortcuts",
        desserts: data.desserts
    });
}

app.get('/', rootRoute);
app.get('/link', dessertRoute);

app.listen(port, () => {console.log("Server started on http://localhost:"+port)});