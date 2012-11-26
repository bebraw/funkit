#!/usr/bin/env node

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
    console.log('amd'); // TODO
}

function generateCJS() {
    console.log('cjs'); // TODO
}
