const validator = require('validator')
const yargs = require('yargs')
const log = console.log;
const fs = require('fs');
const notes = require('./nodes.js');
const { argv } = require('yargs');
// const sum = notes();

// console.log(sum);
const cron = require("node-cron");
const express = require("express");
const { title } = require('process');
 

// app = express();
// cron.schedule("* * * * *", function () {
//    console.log("running a task every minute");
// });



// console.log(yargs.argv)
//  var myobject = {
//     title:"ego is the enemy",
//     aut: "Vikram Handa"
//  }
//  var myjson  = JSON.stringify(myobject);
//  console.log('pbjec', JSON.parse(myjson))
//  fs.writeFileSync('my.json', myjson)
// var filedata = fs.readFileSync('my.json').toString();
// var jsondata = JSON.parse(filedata)
// // console.log(jsondata)
// jsondata.title = "i am indian"
// jsondata.aut = "handa"
// // console.log(jsondata)
// fs.writeFileSync('my.json', JSON.stringify(jsondata))


yargs.command({
   "command": "add",
   "describe": "add of function",
   builder: {
      title: {
         describe: "Note title",
         demandOption: false,
         type: "string"
      },
      body: {
         describe: "Body of title",
         demandOption: false,
         type: "string"
      }
   },
   handler(argv) {
      notes.addNote(argv.title, argv.body)
      log('TITLE', argv.title)
      log('body', argv.body)
   }
})

yargs.command({
   "command": "remove",
   "describe": "remove of function",
   builder: {
      title: {
         describe: "Note title",
         demandOption: false,
         type: "string"
      },
      
   },
   handler(argv) {
      notes.removeNote(argv.title)
      log('TITLE', argv.title)
   }
})
yargs.command({
   "command": "list",
   "describe": "list of node",
   handler(argv) {
      log('list a node', notes.listNotes())
   }
})
yargs.command({
   "command": "read",
   "describe": "read of node",
   builder: {
      title: {
         describe: "Note title",
         demandOption: true,
         type: "string"
      },
      
   },
   handler(argv) {
      notes.readNote(argv.title)
      log('TITLE', argv.title)
   }
})
yargs.parse()