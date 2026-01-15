import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GithubService } from '../../github/github.service';
import { Observable } from 'rxjs';

export const githubRepositoriesResolver: ResolveFn<any> = (
  route,
  state
): Observable<any> => {
  const githubService = inject(GithubService);
  // Charger uniquement les repos en collaboration (is_owner: false)
  return githubService.getAllRepositories(100);
};
