# Punch Third Party Snippets Helper

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {

			"helpers": {
				"thirdparty_snippets_helper": "punch-thirdparty-snippets-helper"
			}

		}

* You must then define the configurations for the snippets you wish to use as follows:

		"thirdparty_snippets": {

			"google_analytics": {
				"property_id": "UA-XXXXXX-X"
			}

		}

Here is a full list of options available for each snippet:

**Google Analytics**

* protertyId (required) - The property ID for the site you want to track ([Learn More](http://support.google.com/analytics/bin/answer.py?hl=en&answer=1032385))

## License

Copyright (c) 2012
Licensed under the MIT license.
