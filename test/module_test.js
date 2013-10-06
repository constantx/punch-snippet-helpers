/*jslint indent:2, node:true, nomen:true, unparam: true */
/*global require:false */

(function () {
  "use strict";

  var PunchHelper, mockConfig;

  PunchHelper = require('../lib/punch-snippet-helpers.js');

  mockConfig = {
    thirdparty_snippets: {
      ga: {
        property_id: "UA-XXXXXXX-XX",
        domain: "google.com"
      }
    }
  };

  exports.testModule = function(test) {

    PunchHelper
      .setup(mockConfig)
      .get(null, null, null, function(err, res, res_options, last_modified) {
        if (!err) {
          res_options = res_options;
          last_modified = last_modified;

          test.equal(res.tag.google_analytics_js(), "<script type='text/javascript'>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-XXXXXXX-XX', 'google.com');ga('send', 'pageview');</script>");

          // how many test to expect
          test.expect(1);

          // done test
          test.done();
        }
      });
  };

}());
