# Memory Game

## Deployed website

https://ev-memory.netlify.app/

## 🚀 Getting Started

1. Fork the repo (Make a copy of it to your repos)
2. Clone your project on your machine
3. Install dependencies and run it locally

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

```bash
bash# Clone the repository
git clone https://github.com/YOUR_USERNAME/memory-card-react.git

# Navigate to project directory
cd memory-card-react

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
memory-card-react/
├── public/
│   ├── assets/
│   │   └── images/          # Hero card images
│   │       ├── capitain.jpg
│   │       ├── deadpool.jpg
│   │       ├── ironman.jpg
│   │       ├── spider.jpg
│   │       ├── superman.jpg
│   │       └── wolverine.jpg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CardComp.tsx     # Individual card component
│   │   └── CardComp.module.css
│   ├── data/
│   │   └── cards.json       # Card data configuration
│   ├── styles/
│   │   └── bounceIn.css     # Animation styles
│   ├── types/
│   │   └── card.type.ts     # TypeScript type definitions
│   ├── App.tsx              # Main game logic and state management
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type declarations
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🏗️ Architecture Overview

### Components

- CardComp: Individual card component handling flip animations and click events
- App: Main game component managing game state, logic, and card interactions

## Data Flow

- cards.json → Contains base hero data (6 unique heroes)
- App.tsx → Creates pairs, shuffles cards, manages game state
- CardComp → Receives card data and click handlers as props
- Types → TypeScript definitions ensure type safety

## Key Features

- State Management: React useState for game state, flipped cards, and moves
- Card Matching Logic: Compares hero names when two cards are flipped
- Animation: CSS modules with flip animations and hover effects
- TypeScript: Full type safety with custom type definitions

## 🎨 Styling

- CSS Modules: Scoped component styles to prevent conflicts
- CSS Custom Properties: Consistent theming with CSS variables
- Animations: Smooth card flip transitions and bounce effects
- Responsive Design: Grid layout that adapts to different screen sizes

## 🔧 Technologies Used

- React 18 - UI library
- TypeScript - Type safety and better developer experience
- Vite - Fast build tool and development server
- CSS Modules - Scoped component styling
- ESLint - Code linting and formatting

## 🙏 Acknowledgments

- Superhero images used for educational purposes [Printerest](https://www.pinterest.com/pin/6473993211278271/)
- Inspired by classic memory card games
- Built as a learning project for React and TypeScript
