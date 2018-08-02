var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://192.168.254.129:27017";
module.exports.QueryGet=function(data,callback){
    MongoClient.connect(url, {useNewUrlParser: true },function(err,db){
 
        if(err) throw err;
        var dbo = db.db("tododb");
        dbo.collection('Todolist',function(err,collection){
            if(data.message)
              collection.find({'message' : {$regex : '.*'+ data.message+ '.*'}}).toArray(function(err,items){
                if(err) throw err;
                  callback(items);
              });
            else
              collection.find({}).toArray(function(err,items){
                if(err) throw err;
                  callback(items);
              });
 
        });
 
    });
}