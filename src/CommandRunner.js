let gitHub = require('./GitHub.getRepos');
class CommandRunner {
  constructor() {}
  run(object) {
    return new Promise((resolve, reject) => {
      let resultObject = object;
      let results;
      let resultVar = gitHub(object.username);
      if (object.subject === 'repos') {
        if (object.query === 'details') {
          results = resultVar;
        } else if (object.query === 'count') {
          results = resultVar.length;
        }
      } else if (object.subject === 'starred repos') {
        let starArray = resultVar.map(el => {
          if (el.star) {
            return el;
          }
        });

        if (object.query === 'details') {
          return starArray;
        } else if (object.query === 'count') {
          return starArray.length;
        }
      }

      resultObject.results = results;
      resolve(resultObject);
    });
  }
}

module.exports = CommandRunner;
