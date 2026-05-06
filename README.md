# SchoolWeb - Modern School Website

A professional, responsive school website built with React, TypeScript, and Tailwind CSS. Features a modern UI with smooth animations and comprehensive information sections.

**Live Demo:** [https://hugo123-two.vercel.app](https://hugo123-two.vercel.app)

## 🎯 Features

- **Responsive Design** - Fully mobile-optimized with Tailwind CSS
- **Modern UI Components** - Built with shadcn/ui component library
- **Smooth Animations** - Scroll-based animations using Framer Motion
- **Multiple Pages**:
  - Home - Hero section with key highlights
  - About - School mission and information
  - Academics - Programs and curriculum details
  - Admissions - Enrollment information
  - Student Life - Campus activities and student experiences
  - Contact - Contact form and information
- **Dark Mode Support** - Theme switching with next-themes
- **Type-Safe** - Full TypeScript support
- **SEO Optimized** - Sitemap and robots.txt included

## 🛠 Tech Stack

- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS 4.2** - Utility-first CSS
- **React Router 7.14** - Client-side routing
- **Framer Motion** - Animation library
- **shadcn/ui** - High-quality React components
- **React Hook Form** - Form state management
- **Zod** - Schema validation

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/nttare0/schoolweb.git
cd schoolweb

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── pages/           # Page components (Home, About, Academics, etc.)
├── components/      # Reusable components
│   ├── ui/         # shadcn/ui components
│   ├── Header.tsx  # Navigation header
│   ├── Footer.tsx  # Footer component
│   └── ...
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## 🎨 UI Screenshots

### Home Page
- Hero section with call-to-action
- Key statistics and highlights
- Featured programs
- Latest news/announcements

### About Page
- School mission and vision
- History and achievements
- Staff information
- Campus gallery

### Academics Page
- Curriculum overview
- Programs offered
- Course descriptions
- Academic achievements

### Student Life Page
- Campus activities
- Student clubs and organizations
- Events calendar
- Photo gallery

### Contact Page
- Contact form
- Location map
- Contact information
- Social media links

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run typecheck` - Check TypeScript errors
- `npm run preview` - Preview production build locally

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root:
```
VITE_API_URL=your_api_url_here
```

### Build Configuration
- **Vite Config**: `vite.config.ts`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: Configured in `tailwind.config.ts` (implicit via @tailwindcss/vite)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Component Library

This project uses shadcn/ui components which include:
- Buttons, Cards, Dialogs
- Forms, Inputs, Select
- Tabs, Accordions, Dropdowns
- Navigation menus
- And 50+ more components

## 🔒 SEO & Performance

- Sitemap for search engine indexing (`public/sitemap.xml`)
- Robots.txt for crawler rules (`public/robots.txt`)
- Google Site Verification support
- Optimized build with tree-shaking
- CSS-in-JS optimization with Tailwind

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💼 Author

Created by ntare0

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For more information, visit the [Contact Page](https://hugo123-two.vercel.app/contact)

---

**Built with ❤️ using modern web technologies**
