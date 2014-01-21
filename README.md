# deprecated, will be merged with [constantx/punch-thirdparty-snippets-helper](https://github.com/constantx/punch-thirdparty-snippets-helper)

***

## [Punch Snippets Helper](https://npmjs.org/package/punch-snippet-helpers)


## google analytics
This is different from the google analytics snippet from the punch default third party snippet helper in that it use the new analytics.js rather than the ga.js.

Open your Punch project's configurations (`config.json`) and add the helpers:

```json
  {
    "plugins": {
      "helpers": {
        "punch-snippet-helpers": "punch-snippet-helpers"
      }
    }
  }
```

__You must then define the configurations for the snippets you wish to use as follows: (You'll need to include both the `property_id` and `domain`)__

```json
  {
    "thirdparty_snippets": {
      "ga": {
        "property_id": "UA-XXXXXX-X",
        "domain": "google.com"
      }
    }
  }
```
## typekit
```json
  {
    "thirdparty_snippets": {
      "typekit": {
        "id": "UA-XXXXXX-X"
      }
    }
  }
```


## License
Copyright (c) 2012
Licensed under the MIT license.
