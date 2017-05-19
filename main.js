module.exports = function(path,callback){
    'use strict';

    var path = path || null,
        result;

    if(!path){
        return console.log('path can\'t be null!');
    }
    
    var exec = require('child_process').exec;
    var fs = require('fs');
    
    ;( () => new Promise( (resolve,reject) => {
        
        exec('cd '+path,function(err,stdout,stderr){
            if(err){
                throw err;
            }
            resolve(stdout);
        });
        
    } ) )().then( () => new Promise( (resolve,reject) => {
        
        var fsExist = fs.existsSync(path+"/app/src/main/assets/");
        if(!fsExist){
            fs.mkdirSync(path+"/app/src/main/assets/");
        }

        resolve();
        
    } ) ).then( () => new Promise( (resolve,reject) => {
        
        try{
            exec("curl -k 'http://localhost:8081/index.android.bundle' > "+path+"/app/src/main/assets/index.android.bundle",function(err,stdout,stderr){
                if(err){
                    throw err;
                }
                resolve(stdout);
            });
        }catch(e){
            throw 'Error!running "react-native start" before.';
        }
        
    } ) ).then( () => new Promise( (resolve,reject) => {
        
        exec('cd '+path+' && ./gradlew assembleDebug',function(err,stdout,stderr){
            if(err){
                throw err;
            }
            resolve(stdout);
        });
        
    } ) ).then( (stdout) => new Promise( (resolve,reject) => {
        
        result = path+'/app/build/outputs/apk';
        callback && callback(result);
        
    } ) );

}