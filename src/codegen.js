"use strict";

const fs = require("fs");
const resolve = require("path").resolve;
const lodash = require("lodash");
const beautify = require("js-beautify").js_beautify;

module.exports = spec => {
  const content = fs.readFileSync(resolve(__dirname, "./template.js"), "utf-8");
  const compiled = lodash.template(content);

  return beautify(compiled({ spec: spec }), {
    indent_size: 2,
    max_preserve_newlines: 1
  });
};
