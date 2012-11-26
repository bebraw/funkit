#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

main(process.argv);

function main(argv) {
    var program = require('commander');

    program.option('-s --silent', 'suppress log messages');

    cmd(program, 'amd', 'generate amd modules', generateAMD);
    cmd(program, 'cjs', 'generate cjs modules', generateCJS);

    program.parse(argv);

    if(!program.args.length) {
        program.outputHelp();
        process.exit(0);
    }
}

function cmd(program, command, desc, action) {
    program.command(command).description(desc).action(action);
}

function generateAMD() {
   var libPath = path.join(__dirname, 'lib');

    dirs(libPath, function(err, dir) {
        files(dir, function(err, file) {
            var ext = path.extname(file);
            // TODO: convert this into a parallel exec using funkit
            // and output the filesnames using a template substitution
            if(ext == '.js') console.log(file);
        });
    });
}

function dirs(p, cb) {
    readdir(p, function(err, fp) {
        fs.stat(fp, function(err, f) {
            if(f.isDirectory()) cb(err, fp, f);
        });
    });
}

function files(p, cb) {
    readdir(p, function(err, fp) {
        fs.stat(fp, function(err, f) {
            if(f.isFile()) cb(err, fp, f);
        });
    });
}

function readdir(p, cb) {
    fs.readdir(p, function(err, files) {
        files.forEach(function(file) {
            cb(err, path.join(p, file));
        });
    });
}

function generateCJS() {
    console.log('cjs'); // TODO
}
