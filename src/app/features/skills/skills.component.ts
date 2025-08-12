import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { siteData } from '../../content/site.json';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-white dark:bg-gray-800">
      <div class="container-max">
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ siteData.skills.title }}
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ siteData.skills.description }}
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div class="space-y-16">
          <!-- Frontend Skills -->
          <div class="animate-slide-up">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">Frontend Development</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div *ngFor="let skill of siteData.skills.categories.frontend" class="card p-6 text-center group">
                <div class="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div class="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">{{ getSkillIcon(skill.icon) }}</span>
                  </div>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h3>
                <span class="text-sm text-primary-600 dark:text-primary-400">{{ skill.level }}</span>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="animate-slide-up" style="animation-delay: 0.2s;">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">Backend & Database</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div *ngFor="let skill of siteData.skills.categories.backend" class="card p-6 text-center group">
                <div class="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div class="w-full h-full bg-gradient-to-br from-accent-100 to-primary-100 dark:from-accent-900 dark:to-primary-900 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">{{ getSkillIcon(skill.icon) }}</span>
                  </div>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h3>
                <span class="text-sm text-accent-600 dark:text-accent-400">{{ skill.level }}</span>
              </div>
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="animate-slide-up" style="animation-delay: 0.4s;">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">Tools & Others</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div *ngFor="let skill of siteData.skills.categories.tools" class="card p-6 text-center group">
                <div class="w-16 h-16 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div class="w-full h-full bg-gradient-to-br from-secondary-100 to-accent-100 dark:from-secondary-900 dark:to-accent-900 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">{{ getSkillIcon(skill.icon) }}</span>
                  </div>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h3>
                <span class="text-sm text-secondary-600 dark:text-secondary-400">{{ skill.level }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent {
  siteData = siteData;

  getSkillIcon(icon: string): string {
    const icons: Record<string, string> = {
      html5: '🌐',
      css3: '🎨',
      javascript: '⚡',
      angular: '🅰️',
      supabase: '🗄️',
      docker: '🐳',
      git: '📝',
      cursor: '🤖'
    };
    return icons[icon] || '💻';
  }
}
