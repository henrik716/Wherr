cordova.define("cordova-plugin-googleplayservices-check.GooglePlayServicesCheck", function(require, exports, module) {
/*global cordova, module*/

module.exports = {
    check: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "GooglePlayServicesCheck", "check", []);
    }
};
});
