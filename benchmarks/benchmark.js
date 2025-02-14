const Benchmark = require("benchmark");
const { offsetSourceMap } = require("../dist/index.js");
const MagicString = require("magic-string");

const suite = new Benchmark.Suite();

function offsetLines(map, offset) {
  const isString = "string" === typeof map;
  const sourceMap = isString ? JSON.parse(map) : map;
  sourceMap.mappings = ";".repeat(offset) + sourceMap.mappings;
  return isString ? JSON.stringify(sourceMap) : sourceMap;
}

const s = new MagicString("var a = 1,\nb=2");
const map = s
  .generateMap({ includeContent: true, source: "a.js", hires: "boundary" })
  .toString();

// Add tests
suite
  .add("offsetSourceMap", function () {
    offsetSourceMap(map, 2);
  })
  .add("offsetLines", function () {
    offsetLines(map, 2);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
