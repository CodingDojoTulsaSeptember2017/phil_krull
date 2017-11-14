import { User } from './user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GitHubService {

  constructor(private _http: Http) { }

    baseUrl = 'https://api.github.com/users/';

    getGitHubData(user: User, callback) {
      this._http.get(this.baseUrl + user.userName).subscribe(
        // 1st callback after get => success
        (response) => {
          // execute the callback to get the data in the component
          callback(response.json());
          console.log(response.json());
        },
        // 2nd callback after get => errors
        (errors) => {
          console.log(errors);
        }
      );
    }

}
