#!/usr/local/bin/node

const argv = require("yargs").argv;
const _ = require("lodash");

async function main() {
  const folders = argv._[0].split("|");
  
  console.log("folders", folders);

  const apps = ["gmail", "calendar", "dashboard", "keep", "contacts", "slack"];

  const updatedApps = _.intersection(apps, folders);

  console.log("updatedApps", updatedApps);
}

main();
