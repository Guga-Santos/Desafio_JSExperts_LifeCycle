const moment = require('moment');

const format = (data) => moment.utc(data).format('HH:mm:ss:SSS');

module.exports = format;