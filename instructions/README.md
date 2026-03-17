# Next.js Cloudscape Template

## 🎨 Overview

A modern, production-ready template combining **Next.js 14+** with **AWS Cloudscape Design System**. Cloudscape is a versatile, open-source design system used by AWS products, providing 72+ pre-built components for enterprise-grade UIs.

This template includes a fully configured development environment, TypeScript support, responsive layouts, and comprehensive component examples across all categories.

**Perfect for:** Building AWS-aligned dashboards, admin panels, data management tools, and enterprise applications.

---

## 🛠 Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Next.js** | React framework with App Router | 14+ |
| **React** | UI library | 18+ |
| **TypeScript** | Type safety | 5+ |
| **Cloudscape** | Design system & components | Latest |
| **PNPM** | Package manager | 8+ |

---

## ⚡ Quick Start

### Installation

```bash
# Clone or create from template
npx create-next-app@latest --example cloudscape-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see your app.

---

## 🧩 Components (72 Total)

### **Feedback** (8 components)
Alert, Alert Dialog, Flashbar, Notification, Progress Bar, Spinner, Status Indicator, Toast

### **Layout** (12 components)
App Layout, Box, Container, Content Layout, Grid, Header, Layout, Sidebar, Sticky, Tabs, Tiles, Wizard

### **Input** (18 components)
Autosuggest, Button, Checkbox, Date Picker, Date Range Picker, File Upload, Form Field, Input, Multiselect, Number Input, Pagination, Radio Group, Search Field, Select, Slider, Textarea, Time Picker, Toggle

### **Display** (14 components)
Badge, Button Group, Card, Code View, Copy to Clipboard, Expandable Section, Icon, Links, List, Properties Panel, Text, Tooltip, Typography, Visuals

### **Navigation** (6 components)
Breadcrumbs, Link, Navigation, Pagination, Side Navigation, Tabs

### **Data Display** (8 components)
Area Chart, Bar Chart, Carousel, Code, Collection, Line Chart, Pie Chart, Table

### **Utility** (4 components)
Help Panel, Modal, Popover, Spotlight

### **Overlay** (2 components)
Modal, Drawer

---

## 💻 Commands

```bash
# Development
pnpm dev              # Start dev server (localhost:3000)

# Production
pnpm build            # Build for production
pnpm start            # Start production server
pnpm start --prod     # Production build & run

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm type-check       # TypeScript type checking

# Testing (optional)
pnpm test             # Run tests
pnpm test:watch       # Watch mode
```

---

## 📚 Essential Setup

### 1. Install Cloudscape

```bash
pnpm add @cloudscape-design/components @cloudscape-design/global-styles
```

### 2. Import Global Styles (`app/layout.tsx`)

```typescript
import '@cloudscape-design/global-styles/index.css'
import '@/styles/globals.css'

export const metadata = {
  title: 'Next.js Cloudscape Template',
  description: 'Enterprise UI with AWS Cloudscape Design System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### 3. Basic Component Usage

```typescript
'use client'
import { Button, Header, Container, Box } from '@cloudscape-design/components'

export default function Page() {
  return (
    <Container>
      <Header variant="h1">Welcome to Cloudscape</Header>
      <Box padding="m">
        <Button variant="primary">Get Started</Button>
      </Box>
    </Container>
  )
}
```

---

## 🎯 Key Features

✅ **72 Production-Ready Components** – Feedback, Layout, Input, Display, Navigation, Data Display, Utility, Overlay  
✅ **TypeScript Support** – Full type safety across components  
✅ **Dark Mode Ready** – Cloudscape supports light/dark themes  
✅ **Accessibility (a11y)** – WCAG 2.1 compliant components  
✅ **Responsive Design** – Mobile, tablet, desktop optimized  
✅ **AWS Aligned** – Use the same design system as AWS products  
✅ **Extensible** – Easy to customize colors, spacing, typography  

---

## 📖 Resources

| Resource | Link |
|----------|------|
| **Cloudscape Docs** | https://cloudscape.design |
| **Component Library** | https://cloudscape.design/components |
| **Design Tokens** | https://cloudscape.design/tokens |
| **GitHub (Open Source)** | https://github.com/cloudscape-design |
| **Next.js Docs** | https://nextjs.org/docs |
| **React Docs** | https://react.dev |

---

## 📝 License

MIT – Free to use in personal and commercial projects.

---

**Need help?** Visit [Cloudscape Design Documentation](https://cloudscape.design) or check the [GitHub Discussions](https://github.com/cloudscape-design/components).
