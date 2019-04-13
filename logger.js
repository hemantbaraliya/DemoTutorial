var url = 'http://someLogger.io';

function log(message) {
    console.log(message);
}

module.exports.log=log;
module.exports.endurl=url;
