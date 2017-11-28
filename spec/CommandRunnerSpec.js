const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    this.runner = new CommandRunner();
  });
  xit("returns user's repos with descriptions", () => {
    let object = { username: "griselda", subject: "repos", query: "details" };
    const result = this.runner.run(object);
    object.results = [
      { name: "repo1", description: "description of repo1", star: true },
      { name: "repo2", description: "description of repo2", star: false }
    ];
    expect(result).toEqual(object);
  });
  it("returns user's starred repos with descriptions", done => {
    let object = {
      username: "griselda",
      subject: "starred repos",
      query: "details"
    };
    let resultsObject = Object.assign({}, object, {
      results: [
        { name: "repo1", description: "description of repo1", star: true }
      ]
    });
    var x = this.runner.run(object);
    this.runner.run(object).then(output => {
      console.log(output);
      console.log(resultsObject);
      expect(output).toEqual(resultsObject);
      done();
    });
  });
  xit("returns user's repo count", () => {
    let object = { username: "griselda", subject: "repos", query: "count" };
    const result = this.runner.run(object);
    object.results = 2;
    expect(result).toEqual(object);
  });
  xit("returns user's star count", () => {
    let object = {
      username: "griselda",
      subject: "starred repos",
      query: "count"
    };
    const result = this.runner.run(object);
    object.results = 1;
    expect(result).toEqual(object);
  });
});
