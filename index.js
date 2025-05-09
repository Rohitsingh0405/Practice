// // var http = require('http')
// // http.createServer(function(req,res){
// //     res.write("hello world")
// //     res.end()
// // }).listen(8080)

// // const { url } = require("inspector");

// // var http = require('http')
// // http.createServer(function(req,res){
// // res.write("hello how are you")
// // res.end()

// // }).listen(8080)

// // var http = require('http')
// // http.createServer(function(req,res){
// //     res.writeHead(200,{'content-type': 'text/html'})
    
// //     res.write("Hello this is write head")
// // res.end()
// // }).listen(8080)

// // var http = require('http')
// // http.createServer(function(req,res){
// //     res.writeHead(200,{"content-type":"text/html"})
// //     const a = req.url;
// //     console.log(a)
   
// //         if(a=="/hi"){
// //             res.write("hi how are you ")
// //         }
// //         if(a=='/hello'){
// //             res.write("hello how are you")
// //         }
// //         if(a=="/hey"){
// //             res.write("hey you there")
// //         }
    
// // // res.write(req.url)
// // res.end()
// // }).listen(8080)
// var http = require('http')
// var url = require('url');
// const { parse } = require("path");
// const { type } = require("os");
// http.createServer(function(req,res){
//     const link = req.url;
//     res.writeHead(200,{"content-type":"text/html"})
//     const u = url.parse(link,true).query;
//     const b = u.year
//     res.write(b)
//     res.end()
// }).listen(8080)


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
// //   var q = url.parse(req.url, true).query;
// //   var txt = q.year + " " + q.month;
// //   res.write(txt)
//   res.write("hello")
//   res.end();
// }).listen(8080);

// var http = require('http')
// const app = http.createServer(function(req,res){
// req.method()
// }).listen(8080)

// var http = require('http')
// http.createServer(function(req,res){
// if(req.method=='POST' && req.url=="/hi"){
//     res.write("hi this is response")
//     console.log("hi")
// }
// res.end();
// }).listen(8080)



