# SparkUp - Motivation App Website

A modern, interactive motivation app built with Next.js, Tailwind CSS, and shadcn/ui. Inspired by Palantir.com's clean and minimal design aesthetic.

## 🌟 Features

- **Hero Section**: Inspiring tagline with call-to-action buttons
- **Content Type Selector**: Choose between Posts, Blogs/Stories, and Short-form Videos
- **Interactive Digital Slime**: Stress-relief game with realistic physics
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Modern Design**: Clean, minimal UI with smooth animations

## 🎨 Design Philosophy

- **Agentic**: Empowers users to choose their path—content or calm
- **Chill**: Smooth transitions, soft shadows, and ambient animations
- **Aesthetic**: Minimalist layout with emotionally resonant visuals

## 🎯 Color Palette

| Color Role       | Hex       | Purpose |
|------------------|-----------|---------|
| Primary Accent   | #5A67D8   | Focus, clarity |
| Secondary Accent | #F6AD55   | Warmth, optimism |
| Background       | #F7FAFC   | Light, breathable |
| Surface          | #EDF2F7   | Calm, neutral |
| Text Primary     | #2D3748   | Strength, readability |
| Text Secondary   | #718096   | Soft, supportive |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sparkup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── content/           # Content browsing page
│   ├── relief/            # Stress relief tools page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── home/              # Home page components
│   │   ├── HeroSection.tsx
│   │   ├── ContentTypeSelector.tsx
│   │   └── StressReliefSection.tsx
│   ├── relief/            # Stress relief components
│   │   └── SlimeGame.tsx  # Interactive slime game
│   ├── ui/                # shadcn/ui components
│   └── Navigation.tsx     # Main navigation
└── lib/
    └── utils.ts           # Utility functions
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety
- **Animations**: CSS transitions and Canvas API

## 🎮 Interactive Features

### Digital Slime Game
- Physics-based blob simulation
- Mouse/touch interaction
- Stress relief through tactile play
- Responsive canvas rendering

### Content Organization
- Tabbed interface for different content types
- Hover effects and smooth transitions
- Mobile-responsive grid layouts

### Navigation
- Fixed header with backdrop blur
- Mobile hamburger menu with slide-out drawer
- Active page indicators

## 🎨 Design System

All components follow the established design system with:
- Consistent spacing and typography
- Hover states with lift effects
- Smooth transitions (300ms cubic-bezier)
- Accessible color contrasts
- Mobile-first responsive design

## 📱 Routes

- `/` - Home page with hero and content selector
- `/content` - Tabbed content browsing interface  
- `/relief` - Stress relief tools and digital slime game

## � Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Next.js app
3. Your app will be deployed with a live URL

### Deploy on Netlify

1. Build the app: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `.next`

## �🚧 Future Enhancements

- Add actual content management system
- Implement breathing exercise component
- Add ambient sound player
- Create meditation timer
- User preference persistence
- Dark mode support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for mental wellness and motivation**