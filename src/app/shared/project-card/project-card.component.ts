import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubRepo } from '../../models/github-repo.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card p-6 h-full flex flex-col">
      <!-- Header -->
      <div class="flex-1">
        <div class="flex items-start justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
            {{ project.name }}
          </h3>
          <div class="flex items-center space-x-2">
            <!-- Stars -->
            <div class="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>{{ project.stargazers_count }}</span>
            </div>
            <!-- Forks -->
            <div class="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM9.5 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM17.5 20.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM9.5 20.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
              </svg>
              <span>{{ project.forks_count }}</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {{ project.description || 'No description available' }}
        </p>

        <!-- Language Badge -->
        <div class="mb-4" *ngIf="project.language">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            {{ project.language }}
          </span>
        </div>

        <!-- Topics -->
        <div class="mb-4" *ngIf="project.topics && project.topics.length > 0">
          <div class="flex flex-wrap gap-2">
            <span 
              *ngFor="let topic of project.topics.slice(0, 3)" 
              class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {{ topic }}
            </span>
            <span 
              *ngIf="project.topics.length > 3" 
              class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              +{{ project.topics.length - 3 }}
            </span>
          </div>
        </div>
      </div>

      <!-- Footer with Action Buttons -->
      <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex space-x-3">
          <a 
            [href]="project.html_url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-secondary flex-1 text-center"
          >
            <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code
          </a>
          
          <a 
            *ngIf="project.homepage" 
            [href]="project.homepage" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-primary flex-1 text-center"
          >
            <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: GitHubRepo;
}
