var fs = require('fs');
var path = require('path')
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

var trips = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'trips.json'), 'utf-8'));

/* GET travel view */
const travel = (req, res) => {
    console.log('Trips being rendered:', trips.map(t => t.description));
    res.render('travel', { title: 'Travlr Gataways', trips});
};

module.exports = {
    travel
};