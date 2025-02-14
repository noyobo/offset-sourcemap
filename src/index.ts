import {
  RawSourceMap,
  SourceMapConsumer,
  SourceMapGenerator,
} from "source-map-js";


/**
 * Offset the line number of the source map
 * @param sourceMap
 * @param offset
 */
export const offsetSourceMap = (
  sourceMap: RawSourceMap | string,
  offset: number,
): RawSourceMap | string => {
  const isString = typeof sourceMap === "string";
  const map: RawSourceMap = isString ? JSON.parse(sourceMap) : sourceMap;

  const consumer = new SourceMapConsumer(map);
  const generator = new SourceMapGenerator({
    file: map.file,
    sourceRoot: map.sourceRoot,
  });

  consumer.eachMapping(function (mapping) {
    if (
      typeof mapping.originalLine === "number" &&
      0 < mapping.originalLine &&
      typeof mapping.originalColumn === "number" &&
      0 <= mapping.originalColumn &&
      mapping.source
    ) {
      generator.addMapping({
        source: mapping.source,
        name: mapping.name,
        original: {
          line: mapping.originalLine,
          column: mapping.originalColumn,
        },
        generated: {
          line: mapping.generatedLine + offset,
          column: mapping.generatedColumn,
        },
      });
    }
  });
  consumer.sources.forEach((source) => {
    const content = consumer.sourceContentFor(source);
    generator.setSourceContent(source, content);
  });

  return isString ? generator.toString() : generator.toJSON();
};
