// ./routes/controller.js
module.exports = function(app) {
    app.get('/',(req, res) =>{
        var ROOT = "<!DOCTYPE HTML>"
            + "<html>"
            + "<head>"
            + "<meta charset='UTF-8'>"
            + "<title>"
            + "</title>"
            + "<body>"
            + "<h1>ROOT</h1>"
            + "</body>"
            + "</head>"
            + "</html>"
        res.send(ROOT);
    })

    app.get('/contact', (req,res) => {
        res.send('contact')
    })
    
}