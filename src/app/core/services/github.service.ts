import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { GitHubRepo } from '../../models/github-repo.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com';
  private readonly username = environment.githubUsername;

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<GitHubRepo[]> {
    const url = `${this.apiUrl}/users/${this.username}/repos`;
    
    return this.http.get<GitHubRepo[]>(url).pipe(
      map(repos => this.filterAndSortRepos(repos)),
      catchError(error => {
        console.error('Error fetching GitHub repositories:', error);
        return of([]);
      })
    );
  }

  private filterAndSortRepos(repos: GitHubRepo[]): GitHubRepo[] {
    return repos
      .filter(repo => !repo.private && !repo.archived && !repo.disabled)
      .sort((a, b) => {
        // Sort by stars first, then by last updated
        if (a.stargazers_count !== b.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 12); // Limit to top 12 repositories
  }

  getRepositoryLanguages(repoName: string): Observable<Record<string, number>> {
    const url = `${this.apiUrl}/repos/${this.username}/${repoName}/languages`;
    
    return this.http.get<Record<string, number>>(url).pipe(
      catchError(error => {
        console.error(`Error fetching languages for ${repoName}:`, error);
        return of({});
      })
    );
  }
}
