import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { siteData } from '../../../content/site.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeToggleComponent],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <nav class="container-max px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/home" class="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
              {{ siteData.name }}
            </a>
          </div>

          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <a 
              routerLink="/home" 
              routerLinkActive="text-primary-600 dark:text-primary-400" 
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a 
              routerLink="/about" 
              routerLinkActive="text-primary-600 dark:text-primary-400" 
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
            >
              About
            </a>
            <a 
              routerLink="/projects" 
              routerLinkActive="text-primary-600 dark:text-primary-400" 
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              routerLink="/skills" 
              routerLinkActive="text-primary-600 dark:text-primary-400" 
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              routerLink="/contact" 
              routerLinkActive="text-primary-600 dark:text-primary-400" 
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
            >
              Contact
            </a>
            <a 
              routerLink="/blog" 
              routerLinkActive="text-primary-600 dark:text-primary-400" 
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
            >
              Blog
            </a>
          </div>

          <!-- Theme Toggle & Mobile Menu Button -->
          <div class="flex items-center space-x-4">
            <app-theme-toggle></app-theme-toggle>
            
            <!-- Mobile menu button -->
            <button 
              (click)="toggleMobileMenu()"
              class="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              [attr.aria-expanded]="isMobileMenuOpen"
              aria-label="Toggle mobile menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  *ngIf="!isMobileMenuOpen" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
                <path 
                  *ngIf="isMobileMenuOpen" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div 
          *ngIf="isMobileMenuOpen" 
          class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-up"
        >
          <div class="flex flex-col space-y-4">
            <a 
              routerLink="/home" 
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              routerLink="/about" 
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-300"
            >
              About
            </a>
            <a 
              routerLink="/projects" 
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              routerLink="/skills" 
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              routerLink="/contact" 
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-300"
            >
              Contact
            </a>
            <a 
              routerLink="/blog" 
              (click)="closeMobileMenu()"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-300"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  siteData = siteData;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
