#!/usr/bin/env node

import chokidar from 'chokidar'
import fs from 'fs'
import path from 'path'
import url from 'url'
const packagePath=path.join(process.cwd(),'./package.json');
const packageObj=JSON.parse(fs.readFileSync(packagePath,'utf-8'))

let watchList=[]
if(packageObj.workspaces){
    if(packageObj.workspaces.length){
        watchList=[...packageObj.workspaces]
    }else{
        watchList=[...packageObj.workspaces.packages]
    }
}
const watcher=chokidar.watch(watchList,{})
console.log('watcher started',JSON.stringify(watchList))

watcher.on('change',path=>{
    console.log(path,'change')
    const now=new Date();
    fs.utimes(packagePath,now,now,()=>{});
});