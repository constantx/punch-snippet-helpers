/*jslint indent:2, node:true, nomen:true, unparam: true */
/*global require:false */

/*
 * punch-thirdparty-snippets-helper
 * https://github.com/laktek/punch-thirdparty-snippets-helper
 *
 * Copyright (c) 2012
 * Licensed under the MIT license.
 */

(function () {
  "use strict";

  var _, snippets_config, tag_helpers;

  _ = require("underscore");

  snippets_config = {
    ga: {
      property_id: "",
      domain: ""
    },
    typekit: {
      id: ""
    }
  };

  tag_helpers = {
    google_analytics_js: function () {
      return "<script type='text/javascript'>" +
        "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
        "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
        "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
        "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" +

        "ga('create', '" + snippets_config.ga.property_id + "', '" + snippets_config.ga.domain + "');" +
        "ga('send', 'pageview');" +

        "</script>";
    },

    typekit: function () {
      return "<script type='text/javascript' src='//use.typekit.net/" +
        snippets_config.typekit.id +
        ".js'></script><script type='text/javascript'>try{Typekit.load();}catch(e){}</script>";
    }
  };

  module.exports = {

    /**
     * Punch will load (require) all available helpers when you start the
     * server or calls punch generate. After loading a helper, Punch will call
     * the setup function of the helper. It will pass configuration options
     * defined for the site as an object.
     * @param  {Object} config
     * @return {null}
     */
    setup: function (config) {
      _.extend(snippets_config, config.thirdparty_snippets);

      return this;
    },

    /**
     * When serving a request, Punch will call the `get` function in each
     * available helper with the following arguments: request path, file
     * extension, request options and a callback.
     * @param  {String}   basepath
     * @param  {String}   file_extension
     * @param  {Object}   options
     * @param  {Function} callback
     * @return {Function}
     */
    get: function (basepath, file_extension, options, callback) {
      // var error = null;
      var
        response_options = {},
        last_modified = new Date();

      return callback(null, { "tag": tag_helpers }, response_options, last_modified);
    }

  };

}());
