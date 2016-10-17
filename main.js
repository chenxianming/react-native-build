module.exports = function(path){
    'use strict';

    var path = path || null,
        result;

    if(!path){
        return console.log('path can\'t be null!');
    }
    
    var commander = require('commander');

    var exec = require('child_process').exec;

    ;(function(){
        return new Promise(function(resolve,reject){
            exec('cd '+path+' && ./gradlew assembleDebug',function(err,stdout,stderr){
                if(err){
                    throw err;
                }
                resolve(stdout);
            });
        });
    }()).then( 
        (stdout) => {
            result = path+'/app/build/outputs/apk';
            console.log(result);
        }
    );
}