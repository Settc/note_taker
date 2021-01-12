const notesData = require("../../db/db.json");
let randomId = Math.floor(Math.random);
module.exports = function(app) 
{
    app.get("/api/notes", function(req, res) 
    {
       return res.json(notesData);
    })
    
    app.post("/api/notes", function(req, res)
    {
        
    })
    
}