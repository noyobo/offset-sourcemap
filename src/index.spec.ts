import { describe, it, expect } from "vitest";
import MagicString from "magic-string";
import { offsetSourceMap } from "./index";

describe("offsetSourceMap", () => {
  it("should offset source map", () => {
    const s = new MagicString("var a = 1,\nb=2");
    const map = s
      .generateMap({ includeContent: true, source: "a.js", hires: "boundary" })
      .toString();
    const map2 = offsetSourceMap(map, 2);
    expect(map2).toMatchInlineSnapshot(
      `"{"version":3,"sources":["a.js"],"names":[],"mappings":";;AAAA,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;AACT,CAAC,CAAC","sourcesContent":["var a = 1,\\nb=2"]}"`,
    );
  });
});
