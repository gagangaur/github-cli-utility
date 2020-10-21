import { GithubApiService } from "./github-api-service";
import { Repo } from "./Repo";
import { User } from "./User";
import * as _ from "lodash";

let service = new GithubApiService();
if (process.argv.length < 3) {
  console.log("Input the username as an argument");
} else {
  let username = process.argv[2];
  service.getUserInfo(username, (user: User) => {
    service.getRepos(username, (repos: Repo[]) => {
      let sortedRepos = _.sortBy(repos, [(repo) => repo.forkCount * -1]);
      let topFiveRepos = _.take(sortedRepos, 5);
      user.repos = topFiveRepos;
      console.log(user);
    });
  });
}
