
### Introduction

Watch yarn workspace changes for Parcel.

### Reference 

https://github.com/parcel-bundler/parcel/issues/4332#issuecomment-978974399

### Usage
#### package.json
    {
        "script": {
            "start": "npx --yes concurrently \"npx @dzhand/parcel-workspace-watcher --yes @dzhand/parcel-workspace-watcher\" \"npx --yes parcel ...\" "
        }
        ...
        "private": true
        "workspace": {
            "packages": ["project A","project B"],
            "nohoist": ["**"],
        }
    }

