#!/usr/bin/env node

const { chalk, semver } = require("../../utils");
const requiredVersion = require("../package.json").engines.node;
const leven = require("leven");
const minimist = require("minimist");

const program = require("commander");

program
  .version(`asfor ${require("../package").version}`)
  .usage("<command> [options]");

program
  .command("create <app-name>")
  .description("create a new project powered by vue-cli-service")
  .action((name, options) => {
    if (minimist(process.argv.slice(3))._.length > 1) {
      console.log(
        chalk.yellow(
          "\n Info: You provided more than one argument. The first one will be used as the app's name, the rest are ignored."
        )
      );
    }
    require("../lib/create")(name, options);
  });

program.parse(process.argv);
