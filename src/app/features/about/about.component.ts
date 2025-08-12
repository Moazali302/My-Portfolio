import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteData } from '../../content/site.json';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-max">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ siteData.about.title }}
          </h1>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Bio Section -->
          <div class="space-y-6 animate-slide-up">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
              Who I Am
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ siteData.about.description }}
            </p>
            
            <!-- Personal Info -->
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Passionate about web development</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Always learning new technologies</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Problem solver and creative thinker</span>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div class="space-y-6 animate-slide-up" style="animation-delay: 0.2s;">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
              Education
            </h2>
            
            <div class="card p-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ siteData.about.education.degree }}
                  </h3>
                  <p class="text-primary-600 dark:text-primary-400 font-medium">
                    {{ siteData.about.education.institution }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 text-sm">
                    {{ siteData.about.education.year }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400 mt-2">
                    {{ siteData.about.education.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interests Section -->
        <div class="mt-16 animate-slide-up" style="animation-delay: 0.4s;">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            What I'm Interested In
          </h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              *ngFor="let interest of siteData.about.interests; let i = index"
              class="card p-6 text-center hover:scale-105 transition-transform duration-300"
              [style.animation-delay]="(0.6 + i * 0.1) + 's'"
            >
              <div class="w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ interest }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
  siteData = siteData;
}
