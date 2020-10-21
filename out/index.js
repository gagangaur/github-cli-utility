"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var github_api_service_1 = require("./github-api-service");
var _ = __importStar(require("lodash"));
var service = new github_api_service_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Input the username as an argument");
}
else {
    var username_1 = process.argv[2];
    service.getUserInfo(username_1, function (user) {
        service.getRepos(username_1, function (repos) {
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]);
            var topFiveRepos = _.take(sortedRepos, 5);
            user.repos = topFiveRepos;
            console.log(user);
        });
    });
}
