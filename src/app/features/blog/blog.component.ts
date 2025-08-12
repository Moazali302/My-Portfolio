import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-max">
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Coming soon! I'll be sharing insights about web development, learning experiences, and tech discoveries here.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div class="text-center py-16">
          <div class="max-w-md mx-auto">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Blog Under Construction</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I'm working on creating valuable content for developers. Check back soon for articles about web development, Angular, and more!
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class BlogComponent {}
