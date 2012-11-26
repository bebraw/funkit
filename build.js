#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');
var nodefy = require('nodefy');

main(process.argv);

function main(argv) {
    var program = require('commander');

    program.option('-s --silent', 'suppress log messages');

    cmd(program, 'amd', 'generate amd modules', partial(generateAMD, out));
    cmd(program, 'cjs', 'generate cjs modules', partial(generateCJS, out));

    program.parse(argv);

    if(!program.args.length) {
        program.outputHelp();
        process.exit(0);
    }

    function out(t) {
        if(!program.silent) console.log('Wrote', t);
    }
}

// http://stackoverflow.com/questions/4394747/javascript-curry-function
function partial(fn) {
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments, [1]);

    return function() {
        return fn.apply(null, args.concat(slice.apply(arguments)));
    };
}

function cmd(program, command, desc, action) {
    program.command(command).description(desc).action(action);
}

function generateAMD(out) {
   var libPath = path.join(__dirname, 'lib');

    dirs(libPath, function(err, dir) {
        files(dir, function(err, file) {
            var ext = path.extname(file);

            if(ext == '.js') return file;
        }, function(err, files) {
            writeTemplate(files, path.basename(dir), 'package', out);
        });

        return dir;
    }, function(err, dirs) {
        writeTemplate(dirs, 'index', 'index', out);
    });
}

function writeTemplate(data, filename, template, out) {
    compile(templatePath(template + '.hbs'), function(err, tpl) {
        var p = path.join(__dirname, 'lib', filename + '.js');

        fs.writeFile(p, tpl(packageData(data)), out(p));
    });
}

function templatePath(name) {
    return path.join(__dirname, '_templates', name);
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
            name: parts[len -  1].split('.')[0]
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
            done(err, f.isDirectory() && cb(err, fp, f));
        });
    }, done);
}

function files(p, cb, done) {
    readdir(p, function(err, fp, done) {
        fs.stat(fp, function(err, f) {
            done(err, f.isFile() && cb(err, fp, f));
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

function generateCJS(out) {
    generateAMD(out);
    nodefy.batchConvert('lib/**/**.js', 'node_modules/funkit', function(err, results) {
        results.forEach(function(v) {
            out(path.join(__dirname, v.outputPath));
        });
    });
}
