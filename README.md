# react-native-build
react-native-build (android only)

build *.apk file on linux.

#Get started
At first,you need do some work for build..

1.Makesure your can runnig the grogram on your device or emulator

2.cd app root path

running 

    react-native start


Install:

    npm install react-native-build
    
or use command line

    npm install react-native-build -g


    
Usage:

    var builder = require('react-native-build');
    builder('react-native android path',function(result){
        console.log(result);//output path
    });
    
or
    
    ./bin/react-native-build -a react-native android path
    
    
#Example:

    var builder = require('react-native-build');
    builder('/Users/name/generatorapp/android',function(result){
        console.log(result);//output path
    });
    
or on command line
    
    react-native-build -a /Users/name/generatorapp/android