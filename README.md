# offset-sourcemap

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
