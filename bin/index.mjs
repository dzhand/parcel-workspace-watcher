#!/usr/bin/env node

import chokidar from 'chokidar'
import fs from 'fs'
import path from 'path'
import url from 'url'

const packagePath=path.join(process.cwd(),'./package.json');
const packageObj=JSON.parse(fs.readFileSync(packagePath,'utf-8'))

const watcher=chokidar.watch(packageObj.workspaces||[],{})

console.log('watcher started')

watcher.on('change',path=>{
    console.log(path,'change')
    const now=new Date();
    fs.utimes(packagePath,now,now,()=>{});
});