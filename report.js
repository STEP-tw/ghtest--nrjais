const request = require("request-promise-native")

const username = process.argv.pop();

const gitApi = "https://api.github.com"

var options = {
  uri: `${gitApi}/users/${username}/repos`,
  //Insert your git access token here
  // qs: {
  //   access_token: 'xxxxx xxxxx' 
  // },
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true
};

request(options)
  .then((repos) => {
    console.log(`${username} has ${repos.length} repositories\n`.toUpperCase());
    repos.forEach(repo => {
      console.log(repo.name);
    });
  })
  .catch((err) => {
    console.log(err);
  })
