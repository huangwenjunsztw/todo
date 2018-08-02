var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://192.168.254.129:27017"; 
module.exports.UpdateSave=function(data,callback){
    MongoClient.connect(url, {useNewUrlParser: true },function(err,db){
        if(err) throw err;
            var dbo = db.db("tododb");
            dbo.collection("Todolist").findAndModify(
                    {id:data.id},
                    [],
                    { $set: { message:data.message} },
                    {new : true},
                    function(err,doc) {
                        if(err) throw err;
                        callback(doc.value);
                    }
              );
 
    });
}