#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

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

            if(ext == '.js') return file;
        }, function(err, files) {
            var data = packageData(files);
            var tplPath = path.join(__dirname, '_templates', 'package.hbs');

            compile(tplPath, function(err, tpl) {
                var output = tpl(data);
                // TODO: write to file
            });
        });
    });
}

Handlebars.registerHelper('list', function(items, options) {
    return items.map(function(val) {
        return options.fn(val);
    }).join(',\n        ');
});

function packageData(files) {
    var modules = files.map(function(file) {
        var parts = file.split(path.sep);
        var len = parts.length;

        return {
            'package': parts[len - 2],
            name: parts[len -  1]
        };
    });

    return {
        modules: modules
    };
}

function compile(path, cb) {
    fs.readFile(path, function(err, f) {
        cb(err, Handlebars.compile(f.toString()));
    });
}

function dirs(p, cb, done) {
    readdir(p, function(err, fp, done) {
        fs.stat(fp, function(err, f) {
            if(f.isDirectory()) done(err, cb(err, fp, f));
        });
    }, done);
}

function files(p, cb, done) {
    readdir(p, function(err, fp, done) {
        fs.stat(fp, function(err, f) {
            if(f.isFile()) done(err, cb(err, fp, f));
        });
    }, done);
}

function readdir(p, cb, done) {
    done = done || function() {};
    var items = [];

    fs.readdir(p, function(err, files) {
        files.forEach(function(file) {
            cb(err, path.join(p, file), function(err, f) {
                items.push(f);

                if(files.length == items.length) done(err, items.filter(id));
            });
        });
    });
}

function id(a) {return a;}

function generateCJS() {
    console.log('cjs'); // TODO
}
