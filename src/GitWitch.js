const questionParser = require('./questionParser');
class GitWitch {
  constructor(string) {
    let parsedQuestion = questionParser(string);
  }
}

module.exports = GitWitch;
