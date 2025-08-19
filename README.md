# Interactive Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and cutting-edge web technologies. Features smooth animations, interactive components, and a beautiful user experience.

## ✨ Features

### Core Features
- **Interactive Timeline** - Scroll-based timeline with GSAP animations showcasing education, projects, and milestones
- **Live GitHub Activity Feed** - Real-time display of commits, repositories, and contributions
- **Tech Stack Visualizer** - Interactive force-directed graph showing technology connections and relationships
- **Responsive Design** - Fully responsive across all devices and screen sizes

### Theme System
- **Light Theme** - Clean, modern light mode
- **Dark Theme** - Elegant dark mode with proper contrast
- **Retro Theme** - Fun pixel-art inspired theme with monospace fonts

### Multilingual Support
- **English** - Primary language
- **Spanish** - Español
- **French** - Français  
- **German** - Deutsch

### Interactive Elements
- **Custom Cursor** - Animated cursor with hover effects and text labels
- **Particle Effects** - Dynamic background particles that respond to theme changes
- **Smooth Animations** - Framer Motion powered page transitions and micro-interactions
- **Scroll Animations** - GSAP ScrollTrigger for scroll-based animations

## 🚀 Technologies Used

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animation library

### Interactive Components
- **React Force Graph 2D** - Force-directed graph visualization
- **Lucide React** - Beautiful, customizable icons
- **React Router DOM** - Client-side routing

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout/         # Layout components (Navigation, etc.)
│   ├── Timeline/       # Interactive timeline
│   ├── GitHub/         # GitHub activity components
│   └── Projects/       # Project showcase components
├── contexts/           # React contexts (Theme, Language, Cursor)
├── pages/              # Page components
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Personal Information
Update your personal information in the following files:
- `src/pages/Home.tsx` - Hero section and main content
- `src/pages/About.tsx` - Personal details and skills
- `src/pages/Contact.tsx` - Contact information
- `src/components/Layout/Navigation.tsx` - Social links

### Resume Download
The resume download functionality uses direct HTML links with the `download` attribute, which is the most reliable method for ensuring the PDF is downloaded correctly.

**How it works:**
1. Uses `<a href="/Resume.pdf" download="Shuma_Jensen_Resume.pdf">` 
2. Browser handles the download natively
3. No JavaScript complexity that could cause corruption

To update your resume:
1. Replace `public/Resume.pdf` with your new resume file
2. The download links are located in `src/pages/Home.tsx` and `src/pages/About.tsx`

### Timeline Data
Edit `src/components/Timeline/InteractiveTimeline.tsx` to customize your timeline:
```typescript
const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Your Achievement',
    subtitle: 'Company Name',
    description: 'Description of your work',
    type: 'work', // 'education' | 'work' | 'project' | 'achievement'
    location: 'Location',
    technologies: ['React', 'TypeScript'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  // Add more timeline items...
]
```

### Projects
Update project information in `src/pages/Projects.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    image: '/path/to/image.jpg',
    technologies: ['React', 'Node.js'],
    category: 'web', // 'web' | 'mobile' | 'desktop' | 'ai' | 'game'
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
  },
  // Add more projects...
]
```

### GitHub Integration
To connect real GitHub data, replace the mock data in `src/components/GitHub/GitHubActivity.tsx` with actual GitHub API calls:

```typescript
// Replace mock data with GitHub API calls
const fetchGitHubData = async () => {
  const response = await fetch('https://api.github.com/users/yourusername/repos')
  const repos = await response.json()
  // Process and set data
}
```

### Theme Customization
Modify theme colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-primary-color',
        // ... other shades
      },
      secondary: {
        500: '#your-secondary-color',
        // ... other shades
      },
    },
  },
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project builds to a static site in the `dist` folder, making it compatible with any static hosting service.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [GSAP](https://greensock.com/gsap/) for scroll animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
- [React Force Graph](https://github.com/vasturiano/react-force-graph) for visualizations

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me through the contact form on the website
- Reach out on social media

---

**Made with ❤️ and lots of ☕**

## 🌐 Live Website

**Visit my portfolio:** [https://sjensen13.github.io/Portfolio/](https://sjensen13.github.io/Portfolio/)
