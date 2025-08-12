# Moaz Ali Portfolio

A modern, responsive portfolio website built with Angular 17+ and Tailwind CSS, featuring dynamic GitHub project integration and Supabase backend.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with dark/light mode toggle
- **Dynamic Projects**: Automatically fetches and displays GitHub repositories
- **Contact Form**: Integrated with Supabase for message storage
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance**: Optimized builds with lazy loading and modern Angular features
- **Docker Ready**: Containerized for easy deployment

## 🛠️ Tech Stack

- **Frontend**: Angular 17+, TypeScript, Tailwind CSS
- **Backend**: Supabase (Database & Authentication)
- **Deployment**: Docker, Nginx, GitHub Actions CI/CD
- **Styling**: Tailwind CSS with custom animations
- **State Management**: Angular Services & RxJS

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+
- Git
- Docker (optional, for containerized deployment)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Moazali302/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create environment files with your configuration:

#### `src/environments/environment.ts`
```typescript
export const environment = {
  production: false,
  githubUsername: 'Moazali302',
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

#### `src/environments/environment.prod.ts`
```typescript
export const environment = {
  production: true,
  githubUsername: 'Moazali302',
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

### 4. Run Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/` to view the application.

## 🗄️ Supabase Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 2. Create Messages Table

Run this SQL in your Supabase SQL editor:

```sql
-- Create messages table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users
CREATE POLICY "Allow public inserts" ON messages
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads (optional, for admin panel)
-- CREATE POLICY "Allow authenticated reads" ON messages
--   FOR SELECT USING (auth.role() = 'authenticated');

-- Grant permissions
GRANT ALL ON messages TO anon;
GRANT ALL ON messages TO authenticated;
```

### 3. Update Environment Variables

Replace the placeholder values in your environment files with your actual Supabase credentials.

## 🐳 Docker Deployment

### Build and Run

```bash
# Build the Docker image
docker build -t portfolio-app .

# Run the container
docker run -p 8080:80 portfolio-app
```

### Using Docker Compose

```bash
# Start the application
docker-compose up --build

# Access at http://localhost:8080
```

## 🚀 Production Build

```bash
# Build for production
npm run build:prod

# The built files will be in dist/moaz-ali-portfolio/
```

## 📱 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build the application
- `npm run build:prod` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run linting
- `docker:build` - Build Docker image
- `docker:run` - Run Docker container
- `docker:dev` - Start with Docker Compose

## 🌐 GitHub Integration

The application automatically fetches your public GitHub repositories. Make sure:

1. Your GitHub username is set in `environment.ts`
2. Your repositories are public
3. The GitHub API rate limits are sufficient

## 🔧 Customization

### Content Updates

Edit `src/content/site.json` to update:
- Personal information
- Skills and technologies
- Contact form messages
- Social media links

### Styling

- Tailwind CSS classes in component templates
- Custom CSS in `src/styles.css`
- Tailwind configuration in `tailwind.config.cjs`

### Components

- Feature components in `src/app/features/`
- Shared components in `src/app/shared/`
- Services in `src/app/core/services/`

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --code-coverage
```

## 📊 Performance

- Lazy-loaded feature modules
- Optimized bundle splitting
- Image optimization
- Gzip compression (Nginx)
- Browser caching strategies

## 🔒 Security

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure HTTP headers
- Environment variable protection

## 🚀 Deployment

### GitHub Pages

1. Build the application: `npm run build:prod`
2. Push the `dist` folder to your repository
3. Enable GitHub Pages in repository settings

### Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build:prod`
3. Set output directory: `dist/moaz-ali-portfolio`

### Docker Hosting

1. Build and push to container registry
2. Deploy to your preferred hosting platform
3. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **GitHub**: [@Moazali302](https://github.com/Moazali302)
- **Portfolio**: [Live Demo](https://moazali302.github.io/My-Portfolio/)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Supabase for the backend-as-a-service
- The open-source community for inspiration and tools

---

**Note**: Remember to replace all placeholder values (URLs, API keys, etc.) with your actual credentials before deploying to production. 
