const forever = require('forever');
const path = require('path');
const cwd = process.cwd();

module.exports = {
    start:function(){
        var logFile = path.resolve(cwd,'log/forever_log.log');
        var script = path.resolve(cwd,'kluster');
        forever.startDaemon(script,{
            silent: false,
            uid:'demo',
            append: false,
            max: 1,
            logFile: logFile,
            command: 'node --debug'
        });
    }
};
