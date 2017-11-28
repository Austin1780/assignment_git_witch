let gitHub = require("./GitHub.getRepos");
class CommandRunner {
  constructor() {}
  run(object) {
    let resultObject = object;
    let results;
    let resultVar = gitHub(object.username);
    if (object.subject === "repos") {
      if (object.query === "details") {
        results = resultVar;
      } else if (object.query === "count") {
        results = resultVar.length;
      }
    } else if (object.subject === "starred repos") {
      let starArray = resultVar.map(el => {
        if (el.star) {
          return el;
        }
      });
      console.log("STAR ARRAY=" + starArray);
      if (object.query === "details") {
        results = starArray;
      } else if (object.query === "count") {
        results = starArray.length;
      }
    }
    resultObject.results = results;
    return new Promise((resolve, reject) => {
      resolve(resultObject);
    });
  }
}

module.exports = CommandRunner;
