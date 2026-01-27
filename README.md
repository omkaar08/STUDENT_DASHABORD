# Student Dashboard - Next.js

A modern student dashboard built with Next.js 14, converted from the original Vite + React application while maintaining the exact same UI, structure, colors, and layout.

## Features

- **Dashboard Overview**: Complete academic performance tracking
- **Attendance Monitoring**: Visual attendance trends and statistics
- **Course Management**: Course performance and progress tracking
- **Financial Overview**: Fee structure and payment tracking
- **Quick Actions**: Easy access to common student tasks
- **Responsive Design**: Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: React Query (TanStack Query)

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
student-dashboard/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main dashboard page
│   └── providers.tsx      # React Query and UI providers
├── components/            # Reusable components
│   ├── dashboard/         # Dashboard-specific components
│   ├── layout/           # Layout components (Sidebar, Header, etc.)
│   └── ui/               # UI primitives (shadcn/ui)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Design System

The application uses a custom design system with:
- **Primary Color**: Teal/Green (#2D7D6E)
- **Custom CSS Variables**: Comprehensive theming system
- **Responsive Grid**: Mobile-first responsive design
- **Animation**: Smooth fade-in animations for components
- **Typography**: Inter font family

## Original Repository

This is a Next.js conversion of: https://github.com/omkaar08/student-dashboard-redesign.git

All UI components, styling, layout, and functionality remain identical to the original Vite version.