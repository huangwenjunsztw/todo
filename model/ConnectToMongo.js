var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://192.168.254.129:27017";
module.exports.ConnectMongo=function(dbName){
	return MongoClient.connect(url, {useNewUrlParser: true }).db(dbName);
};