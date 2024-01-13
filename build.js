#!/usr/local/bin/node

const argv = require("yargs").argv;

async function main() {
  const files = argv._[0];
  
  console.log("files argv._[0]", files);
}

main();
