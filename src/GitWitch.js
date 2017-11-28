class GitWitch {
  constructor(object) {
    this.parser = object.parser;
    this.runner = object.runner;
    this.formatter = object.formatter;
  }
  process(string) {
    let command = this.parser.parse(string);
    let response = this.runner.run(command);
    return new Promise((resolve, reject) => {
      response
        .then(data => {
          resolve(this.formatter.format(data));
        })
        .catch(err => reject(err));
    });
  }
}

module.exports = GitWitch;
