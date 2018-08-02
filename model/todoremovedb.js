var MongoClient=require('mongodb').MongoClient;
 var url = "mongodb://192.168.254.129:27017";
module.exports.RemoveSave=function(data,callback){
    MongoClient.connect(url, {useNewUrlParser: true },function(err,db){
        if(err) throw err;
        var dbo = db.db("tododb");
        dbo.collection('Todolist',function(err,collection){
            collection.remove({id:data.id},{w:1},function(err,result){
               if(err) throw err;
               callback('Document Removed Successfully!');
            });
 
        });
 
    });
}