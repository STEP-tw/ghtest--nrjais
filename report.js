const request = require("request-promise-native")

const username = process.argv.pop();

const gitApi = "https://api.github.com"

var options = {
  uri: `https://api.github.com/users/${username}/repos`,
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
    repos.forEach(repo => {
      console.log(repo.name);
    });
  })
  .catch((err) => {
    console.log(err);
  })
