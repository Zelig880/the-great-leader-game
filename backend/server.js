// Libraries
const Express = require('express');
const Mongo = require('mongodb').MongoClient;
const App = Express();

//Constants
const port = 4242;
//const dbUrl = "mongodb://zelig880:6VPv7QDbriEQpS17vUBZ%21@the-great-leader-cluster-shard-00-00-uadfm.mongodb.net:27017,the-great-leader-cluster-shard-00-01-uadfm.mongodb.net:27017,the-great-leader-cluster-shard-00-02-uadfm.mongodb.net:27017/test?ssl=true&replicaSet=the-great-leader-cluster-shard-0&authSource=admin";
const dbUrl = "mongodb://localhost:27017/the-great-leader-cluster";
// Request logging
App.use(function(req, res, next) {
    console.log(req.url);
    next();
});
 
// Start server
console.log("Starting server");
console.log(__dirname);
App.use(Express.static( __dirname + '/../'));
App.listen(port, function() { 
    console.log("Server running at: http://localhost:" + port)
});

// Mongo.connect(dbUrl, function(err, db) {
//     if (err) throw err;

//     db.collection("Buildings").drop();

//     db.collection("Buildings").insertMany(
//         [
//             { name: "Wood Cutter", Resources: { wood: 10, stone: 5}, Time: 120 },
//             { name: "Stone Cutter", Resources: { wood: 5, stone: 10}, Time: 180 }
//         ], 
//         function(err, result) {
//             console.log("Inserted a document into the  collection.");
//             console.log(result);
            
//         }
//     );
    
//     db.collection("Buildings").findOne(
//         {name: "Wood Cutter"}, 
//         function(err, result) {
//             console.log("Collection found");
//             console.log(result);
//     });

//     db.close();
// });