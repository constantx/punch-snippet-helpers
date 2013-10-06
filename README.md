# [Punch Snippets Helper](https://npmjs.org/package/punch-snippet-helpers)



## google analytics
This is different from the google analytics snippet from the punch default third party snippet helper in that it use the new analytics.js rather than the ga.js.

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {

			"helpers": {
				"punch-snippet-helpers": "punch-snippet-helpers"
			}

		}

* You must then define the configurations for the snippets you wish to use as follows: (You'll need to include both the `property_id` and `domain`)

		"thirdparty_snippets": {

			"ga": {
				"property_id": "UA-XXXXXX-X"
				"domain": "google.com"
			}

		}

## License

Copyright (c) 2012
Licensed under the MIT license.
