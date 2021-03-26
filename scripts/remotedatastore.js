const { $dataMetaSchema } = require("ajv");

(function (window) {
    'use strict';
    var App = window.App || {};

    function RemoteDataStore(url) {
        if (!url) {throw new Error('No remote url supplied'); }
    }

    RemoteDataStore.prototype.add = function (key, val) {
        //this.data[key] = val;
        $.post(this.serverUrl, val, function(serverResponse) {
            console.log(serverResponse);
        });
    };

    RemoteDataStore
    .prototype.get = function(key) {
        return this.data[key];
    };

    RemoteDataStore
    .prototype.getAll = function() {
        return this.data;
    };

    RemoteDataStore
    .prototype.remove = function(key) {
        delete this.data[key];
    };

    App.RemoteDataStore
     = RemoteDataStore
    ;
    window.App = App;
})(window);