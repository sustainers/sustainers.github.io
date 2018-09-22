#!/usr/bin/env node

/*!
 * Script to run vnu-jar if Java is available.
 * Copyright 2017-2018 The Bootstrap Authors
 * Copyright 2017-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict';

var childProcess = require('child_process');
var vnu = require('vnu-jar');

childProcess.exec('java -version', function(error, stdout, stderr) {
    if (error) {
        console.error('Skipping vnu-jar test; Java is missing.');
        return;
    }

    var is32bitJava = !stderr.match(/64-Bit/);

    // vnu-jar accepts multiple ignores joined with a `|`.
    // Also note that the ignores are regular expressions.
    var ignores = [
        'This document appears to be written in.*'
    ].join('|');

    var args = ['-jar', vnu, '--asciiquotes', '--skip-non-html', '--Werror', '--filterpattern "' + ignores + '"', '_site/'];

    // For the 32-bit Java we need to pass `-Xss512k`
    if (is32bitJava) {
        args.splice(0, 0, '-Xss512k');
    }

    return childProcess.spawn('java', args, {
        shell: true,
        stdio: 'inherit'
    }).on('exit', process.exit);
});
