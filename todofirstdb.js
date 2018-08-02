var MongoClient = require('mongodb').MongoClient;

module.exports.InsertNew=function(data,callback){
	MongoClient.connect("mongodb://192.168.254.129:27017/tododb",function(err,db){
		if(err) throw err;
		db.collection("Todolist",function (err,collection){
			if(err) throw err;
			collection.insertMany(data,function(err,r){
				callback(r.insertedCount);
			});
			
		});
		
	});
}