
### Introduction

Watch yarn workspace changes for Parcel.

### Reference 

https://github.com/parcel-bundler/parcel/issues/4332#issuecomment-978974399


### Usage

#### 1. Add Registry

    npm config set @dzhand:registry=https://npm.pkg.github.com

#### 2.Modify package.json
    {
        ...
        "scripts": {
            "start": "npx --yes concurrently \"npx --yes @dzhand/parcel-workspace-watcher\" \"npx --yes parcel ... \" ",
            ...
        },
        ...
        "private": true,
        "workspaces": {
            "packages": ["project A","project B"],
            "nohoist": ["**"]
        }
        ...
    }