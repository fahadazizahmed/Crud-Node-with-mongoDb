var express = require('express');
var  router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');

var url = "mongodb://localhost:27017/AddEmailPass";
MongoClient.connect(url, function(err, db) {
router.get('/',function(req,res){
  //var user = {"name":"fahad","age":23};
  //var {name} = user;
  //console.log(name)
  res.render('index');
});
router.post('/InsertValue',function(req,res){
  //console.log(req.body);

    if (err) throw err;
    var dbo = db.db("AddEmailPass");

    dbo.collection("addUser").insertOne(req.body, function(err, res) {
      if (err) throw err;
      var objec = new ObjectID;
      console.log(objec);
      console.log("1 document inserted");
      db.close();
    });

  /*    dbo.collection("addUser").insertOne({
        email:'Somethin do',
        password:false
      }, function(err, res) {
        if (err) throw err;
          console.log(objec);
        console.log("1 document inserted");
        db.close();
      });*/











res.render('index')

});

router.get('/GetValue',function(req,res){
  //console.log(req.body);

    if (err) throw err;
    var dbo = db.db("AddEmailPass");
  //  dbo.collection("addUser").find({email:'Somethin do'}).toArray(function(err, result) {//all the email  with id Somethin do


    dbo.collection("addUser").find({_id:new ObjectID('5aeec205d29427477cd36aae')}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result)
      db.close();
    });


});



















  });























module.exports = router;
