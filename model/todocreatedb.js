var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://192.168.254.129:27017";
module.exports.InsertNew=function(data,callback){
    MongoClient.connect(url, {useNewUrlParser: true },function(err,db){
        if(err) throw err;
        var dbo = db.db("tododb");
        dbo.collection("Todolist",function(err,collection){
            if(err) throw err;          
 
            //找id最大值的那一筆, 之後id繼續往上加...
              collection.find({},{'id':1}).sort({'id':-1}).limit(1).toArray(
                function(err,items){
                    if(err) throw err;
 
                    var dataset=[];  //定義一個新的資料集dataset
                    var current=0;
            	    if(items.length>0)
            	    {
            	       current=items[0].id+1;
            	    }
                    //把傳進來的data，變成一個新的dataset，給insertMany
                    data.map(function(obj){
                       dataset.push({id:current++,message:obj.message});
                    });
 
                    //把資料集加入mongodb, 可以是一筆或多筆
               collection.insertMany(dataset, function(err, r) {
                   callback(r.insertedCount); //計算新增的筆數
               });
              });
 
      });
 
       });
}