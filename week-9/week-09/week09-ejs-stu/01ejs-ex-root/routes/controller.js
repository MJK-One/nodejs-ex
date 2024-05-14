// ./routes/controller.js
// ./routes/controller-03.js
module.exports = function(app) {
    app.get('/',(req, res) =>{
        res.render('index');
    })

    app.get('/contact', (req,res) => {
        res.render('contact')
    })
 
}