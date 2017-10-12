"use strict";

var fs = require("fs");
var lineByLine = require('n-readlines');
var liner = new lineByLine('./hsk1.csv');

var line;

var hsk1 = [];
while (line = liner.next()) {
    hsk1.push(line.toString('utf8').replace('\r','').trim());
}

var openSubs = [];
var liner = new lineByLine('./openSubs.csv');
while (line = liner.next()) {
    openSubs.push(line.toString('utf8').replace('\r','').trim());
}

var sum = [...new Set([...hsk1 ,...openSubs])];

for(var i=0;i<sum.length;i++){
    fs.appendFileSync("./output.txt", sum[i].toString() + "\n");
}