const questionParser = require("./questionParser");
class GitWitch {
  constructor(parser, runner, formatter) {
    this.parser = parser;
    this.runner = runner;
    this.formatter = formatter;
  }
  process(string) {
    let command = this.parser.parse(string);
    let response = this.runner.run(command);
    return this.formatter.format(response);
  }
}

module.exports = GitWitch;
