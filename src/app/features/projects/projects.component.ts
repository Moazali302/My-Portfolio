import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubService } from '../../core/services/github.service';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { GitHubRepo } from '../../models/github-repo.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-max">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've built. Each one represents a learning experience and showcases different technologies and problem-solving approaches.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-6"></div>
        </div>

        <!-- Loading State -->
        <div *ngIf="loading" class="text-center py-16">
          <div class="inline-flex items-center space-x-2">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <span class="text-gray-600 dark:text-gray-400">Loading projects...</span>
          </div>
        </div>

        <!-- Error State -->
        <div *ngIf="error && !loading" class="text-center py-16">
          <div class="max-w-md mx-auto">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Unable to load projects</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ error }}
            </p>
            <button 
              (click)="loadProjects()"
              class="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div *ngIf="!loading && !error && projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let project of projects; let i = index"
            class="animate-scale-in"
            [style.animation-delay]="(i * 0.1) + 's'"
          >
            <app-project-card [project]="project"></app-project-card>
          </div>
        </div>

        <!-- Empty State -->
        <div *ngIf="!loading && !error && projects.length === 0" class="text-center py-16">
          <div class="max-w-md mx-auto">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p class="text-gray-600 dark:text-gray-400">
              It looks like there are no public repositories to display at the moment.
            </p>
          </div>
        </div>

        <!-- GitHub Link -->
        <div class="text-center mt-12">
          <a 
            href="https://github.com/Moazali302" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-secondary inline-flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {
  projects: GitHubRepo[] = [];
  loading = true;
  error: string | null = null;

  constructor(private githubService: GitHubService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.error = null;

    this.githubService.getRepositories().subscribe({
      next: (repos) => {
        this.projects = repos;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load projects. Please check your internet connection and try again.';
        this.loading = false;
        console.error('Error loading projects:', err);
      }
    });
  }
}
