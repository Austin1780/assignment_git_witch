let GitHubObject = {
  griselda: [
    { name: "repo1", description: "description of repo1", star: true },
    { name: "repo2", description: "description of repo2", star: false }
  ],
  user2: [
    { name: "repo1", description: "description of repo1", star: true },
    { name: "repo2", description: "description of repo2", star: false }
  ],
  user3: [
    { name: "repo1", description: "description of repo1", star: true },
    { name: "repo2", description: "description of repo2", star: false }
  ]
};

let GitHubContents = username => {
  return GitHubObject[username];
};

module.exports = GitHubContents;
