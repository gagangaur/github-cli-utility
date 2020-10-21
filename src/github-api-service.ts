import * as request from "request";
import { Repo } from "./Repo";
import { User } from "./User";
const OPTIONS: any = {
  headers: {
    "User-Agent": "github-typescript-cli-utility",
  },
  json: true,
};
export class GithubApiService {
  getUserInfo(userName: string, callBack: (user: User) => any) {
    request.get(
      `https://api.github.com/users/${userName}`,
      OPTIONS,
      (error, response, body) => {
        let user = new User(body);
        callBack(user);
      }
    );
  }
  getRepos(userName: string, callBack: (repos: Repo[]) => any) {
    request.get(
      `https://api.github.com/users/${userName}/repos`,
      OPTIONS,
      (error, response, body) => {
        let repos = body.map((repo: any) => {
          return new Repo(repo);
        });
        callBack(repos);
      }
    );
  }
}
