"use strict";

const fs = require("fs");
const pkg = require("../package.json");
const program = require("commander");
const yaml = require("js-yaml").safeLoad;
const codegen = require("./codegen");
const http = require("http");

program
  .version(pkg.version)
  .option("-f, --file <file>", "", "")
  .option("-u, --url <url>", "", "")
  .parse(process.argv);

const generate = content => {
  let spec;
  try {
    spec = JSON.parse(content);
  } catch (e) {
    spec = yaml(content);
  }
  console.log(codegen(spec));
};

if (program.file !== "") {
  generate(fs.readFileSync(program.file, "utf-8"));
} else if (program.url !== "") {
  http
    .get(program.url, res => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", chunk => (body += chunk));
      res.on("end", res => generate(body));
    })
    .on("error", e => console.log(e.message));
}
