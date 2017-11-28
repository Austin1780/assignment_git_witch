const CommandRunner = require("../src/CommandRunner");

describe("CommandRunner", () => {
  beforeEach(() => {
    this.runner = new CommandRunner();
  });
  it("returns user's repos with descriptions", () => {
    let object = {username: "griselda", subject: "repos", query: "details"};
    const result= this.runner.run(object);
    object.results = [
      { name: "repo1", description: "description of repo1", star: true },
      { name: "repo2", description: "description of repo2", star: false }
    ];
    expect(result).toEqual(object);
  });
  it("returns user's starred repos with descriptions", () => {
    let object = {username: "griselda", subject: "starred repos", query: "details"};
    const result= this.runner.run(object);
    object.results = [
      { name: "repo1", description: "description of repo1", star: true },
    ];
    expect(result).toEqual(object);
  });
  it("returns user's repo count", () => {
    let object = {username: "griselda", subject: "repos", query: "count"};
    const result= this.runner.run(object);
    object.results = 2;
    expect(result).toEqual(object);
  });
  it("returns user's star count", () => {
    let object = {username: "griselda", subject: "starred repos", query: "count"};
    const result= this.runner.run(object);
    object.results = 1;
    expect(result).toEqual(object);
  });
});
