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
        console.log(dir);
        // TODO: get js file names within dirs now
        // TODO: output to lib/ using a template substitution
    });
}

function dirs(p, cb) {
    fs.readdir(p, function(err, files) {
        if(err) throw err;

        files.forEach(function(file) {
            var fp = path.join(p, file);

            fs.stat(fp, function(err, f) {
                if(f.isDirectory()) cb(err, fp);
            });
        });
    });
}

function generateCJS() {
    console.log('cjs'); // TODO
}
