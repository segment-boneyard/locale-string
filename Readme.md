
# locale-string

  Convert locale strings to english names and back. Used with pairs of [ISO 639-1 language codes][language] and [ISO 3166-1-alpha-2][country] country codes.

[language]: http://en.wikipedia.org/wiki/ISO_639-1
[country]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

## Install

    $ npm install locale-string

## Usage

```js
var locale = require('locale-string');

// convert from english words

locale('English', 'United States'); // 'en-US'

// or parse locale strings

locale.parse('en-CA'); // { language: 'English', country: 'Canada' }
```

## API

### locale-string(language, country)

  Returns a locale string of the two letter language and country codes given their proper english names.

```js
locale('English', 'United States'); // 'en-US'
```

### .parse(locale)

  Returns an object containing the parsed language and country

```js
locale.parse('en-CA'); // { language: 'English', country: 'Canada' }
```

## License

(The MIT License)

Copyright (c) 2014 Segment.io &lt;team@segment.io&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.