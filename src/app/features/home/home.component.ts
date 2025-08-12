import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="container-max text-center px-4 sm:px-6 lg:px-8">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style="animation-delay: -1s;"></div>
        </div>

        <!-- Main Content -->
        <div class="relative z-10 space-y-8">
          <!-- Greeting -->
          <div class="animate-fade-in">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              {{ siteData.hero.title }}
            </h1>
          </div>

          <!-- Role -->
          <div class="animate-slide-up" style="animation-delay: 0.2s;">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              {{ siteData.hero.subtitle }}
            </h2>
          </div>

          <!-- Description -->
          <div class="animate-slide-up max-w-3xl mx-auto" style="animation-delay: 0.4s;">
            <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {{ siteData.hero.description }}
            </p>
          </div>

          <!-- CTA Button -->
          <div class="animate-slide-up" style="animation-delay: 0.6s;">
            <a 
              routerLink="/projects" 
              class="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>{{ siteData.hero.cta }}</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          <!-- Scroll Indicator -->
          <div class="animate-bounce-gentle absolute bottom-8 left-1/2 transform -translate-x-1/2" style="animation-delay: 1s;">
            <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container-max px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Projects Count -->
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
            <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          
          <!-- Technologies -->
          <div class="text-center">
            <div class="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">8+</div>
            <div class="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          
          <!-- Experience -->
          <div class="text-center">
            <div class="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">2+</div>
            <div class="text-gray-600 dark:text-gray-400">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent {
  siteData: any;

  constructor(private siteDataService: SiteDataService) {
    this.siteData = this.siteDataService.getSiteData();
  }
}
