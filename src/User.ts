import { Repo } from "./Repo";
export class User {
  login: string;
  fullName: string;
  repoCount: number;
  followerCount: number;
  followingCount: number;
  repos?: Repo[];

  constructor(userResponse: any) {
    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.repoCount = userResponse.public_repos;
    this.followerCount = userResponse.followers;
    this.followingCount = userResponse.following;
  }
}
