#!/usr/bin/env node

console.log('Starting install of HTML-template-skeleton')
const {execSync} = require('child_process');
const gitClone = 'git clone https://github.com/kentaroau/html-boilerplate.git';

const runCommand = command => {

    try{
        console.log(`Running command ${command}`);
        execSync(`${command}`, {stdio: 'inherit'});
    }
    catch (e)
    {
        console.error(`Failed to execute ${command}`);
        return false;
    }
    return true;
}

const cloned = runCommand(gitClone);
if (cloned == false)
    process.exit(-1);