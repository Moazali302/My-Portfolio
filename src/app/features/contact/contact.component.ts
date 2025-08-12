import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SupabaseService, ContactMessage } from '../../core/services/supabase.service';
import { siteData } from '../../content/site.json';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section-padding bg-gray-50 dark:bg-gray-900">
      <div class="container-max">
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ siteData.contact.title }}
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {{ siteData.contact.description }}
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div class="max-w-2xl mx-auto">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ siteData.contact.form.name }} *
              </label>
              <input
                id="name"
                type="text"
                formControlName="name"
                class="input-field"
                [class.border-red-500]="isFieldInvalid('name')"
                placeholder="Enter your name"
              />
              <div *ngIf="isFieldInvalid('name')" class="mt-1 text-sm text-red-600 dark:text-red-400">
                Name is required
              </div>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ siteData.contact.form.email }} *
              </label>
              <input
                id="email"
                type="email"
                formControlName="email"
                class="input-field"
                [class.border-red-500]="isFieldInvalid('email')"
                placeholder="Enter your email"
              />
              <div *ngIf="isFieldInvalid('email')" class="mt-1 text-sm text-red-600 dark:text-red-400">
                <span *ngIf="contactForm.get('email')?.hasError('required')">Email is required</span>
                <span *ngIf="contactForm.get('email')?.hasError('email')">Please enter a valid email</span>
              </div>
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ siteData.contact.form.message }} *
              </label>
              <textarea
                id="message"
                formControlName="message"
                rows="5"
                class="input-field resize-none"
                [class.border-red-500]="isFieldInvalid('message')"
                placeholder="Enter your message"
              ></textarea>
              <div *ngIf="isFieldInvalid('message')" class="mt-1 text-sm text-red-600 dark:text-red-400">
                Message is required
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button
                type="submit"
                [disabled]="contactForm.invalid || submitting"
                class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span *ngIf="!submitting">{{ siteData.contact.form.submit }}</span>
                <span *ngIf="submitting" class="inline-flex items-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </div>
          </form>

          <!-- Success/Error Messages -->
          <div *ngIf="message" class="mt-6 p-4 rounded-lg" [class]="messageClass">
            <div class="flex items-center">
              <svg *ngIf="isSuccess" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <svg *ngIf="!isSuccess" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ message }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  contactForm: FormGroup;
  submitting = false;
  message = '';
  isSuccess = false;
  siteData = siteData;

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.submitting = true;
    this.message = '';

    const messageData: ContactMessage = this.contactForm.value;

    try {
      const result = await this.supabaseService.submitContactForm(messageData).toPromise();
      
      if (result && result.data) {
        this.isSuccess = true;
        this.message = siteData.contact.form.success;
        this.contactForm.reset();
      } else {
        throw new Error('Failed to submit message');
      }
    } catch (error) {
      this.isSuccess = false;
      this.message = siteData.contact.form.error;
      console.error('Error submitting contact form:', error);
    } finally {
      this.submitting = false;
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  get messageClass(): string {
    return this.isSuccess 
      ? 'bg-green-100 border border-green-400 text-green-700 dark:bg-green-900 dark:border-green-700 dark:text-green-300'
      : 'bg-red-100 border border-red-400 text-red-700 dark:bg-red-900 dark:border-red-700 dark:text-red-300';
  }
}
