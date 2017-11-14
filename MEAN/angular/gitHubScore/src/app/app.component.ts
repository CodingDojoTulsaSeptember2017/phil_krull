import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { GitHubService } from './git-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  numberOfRepos: number;
  numberOfFollowers: number;
  user: User = new User();

  constructor(private _gitHubService: GitHubService) {}

  ngOnInit() {
    // this will run when the component is loaded
  }

  onSubmit() {
    // send the userName to the service
    this._gitHubService.getGitHubData(this.user, (response) => {
      this.numberOfRepos = response.public_repos;
      console.log(response);
      console.log(this.numberOfFollowers);
      this.numberOfFollowers = response.followers;
    });
    console.log(this.user);
    this.user = new User();
  }
}
