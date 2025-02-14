# offset-sourcemap

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]

## Description

`offset-sourcemap` is a utility for offsetting the lines of a source map. This can be useful in various scenarios where you need to adjust the line numbers in a source map, such as when concatenating files or adding/removing lines of code.

## Installation

You can install the package using `npm` or `yarn`:

```sh
npm install offset-sourcemap
```

or

```sh
yarn add offset-sourcemap
```

## Usage

Here is an example of how to use the `offsetSourceMap` function:

```typescript
import { offsetSourceMap } from "offset-sourcemap";
import MagicString from "magic-string";

const s = new MagicString("var a = 1,\nb=2");
const map = s
  .generateMap({ includeContent: true, source: "a.js", hires: "boundary" })
  .toString();
const offsetMap = offsetSourceMap(map, 2);

console.log(offsetMap);
```

## API

### `offsetSourceMap(sourceMap: RawSourceMap | string, offset: number): RawSourceMap | string`

Offsets the lines in the given source map by the specified number of lines.

- `sourceMap`: The source map to offset. Can be a `RawSourceMap` object or a JSON string.
- `offset`: The number of lines to offset the source map by.

Returns the offset source map, either as a `RawSourceMap` object or a JSON string, depending on the input type.

## License

This project is licensed under the MIT License.


[build-img]:https://github.com/noyobo/offset-sourcemap/actions/workflows/ci.yml/badge.svg
[build-url]:https://github.com/noyobo/offset-sourcemap/actions/workflows/ci.yml
[downloads-img]:https://img.shields.io/npm/dt/offset-sourcemap
[downloads-url]:https://www.npmtrends.com/offset-sourcemap
[npm-img]:https://img.shields.io/npm/v/offset-sourcemap
[npm-url]:https://www.npmjs.com/package/offset-sourcemap
[issues-img]:https://img.shields.io/github/issues/noyobo/offset-sourcemap
[issues-url]:https://github.com/noyobo/offset-sourcemap/issues
[codecov-img]:https://codecov.io/gh/noyobo/offset-sourcemap/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/noyobo/offset-sourcemap
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
