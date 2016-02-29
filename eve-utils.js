var Moment = require("moment");

module.exports.dateToSQL = function(eveDate) {
	var t = new Moment(eveDate);
	return t.utc().format("YYYY-MM-DD HH:mm:ss");
}