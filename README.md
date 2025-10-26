# ⚓ Pirates Inc - Business Showcase Website

![App Preview](https://imgix.cosmicjs.com/9552d520-b2af-11f0-8dcc-651091f6a7c0-photo-1551288049-bebda4e38f71-1761512762101.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, pirate-themed business website built with Next.js 15 and Cosmic CMS. Showcase yer services, crew, testimonials, and case studies with style and swagger!

## ✨ Features

- 🏴‍☠️ **Pirate-themed branding** with professional design
- 📱 **Fully responsive** - works on all devices
- 🎯 **Services showcase** with descriptions and pricing
- 👥 **Team directory** with crew member profiles
- 💬 **Client testimonials** with ratings and photos
- 📊 **Case studies** with detailed project information
- 🔗 **Related content linking** - case studies to services
- ⚡ **Server-side rendering** for optimal performance
- 🖼️ **Automatic image optimization** with imgix
- 🎨 **Modern UI** built with Tailwind CSS
- 📝 **Content management** via Cosmic CMS

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68fe8c87253f74e042fa76a8&clone_repository=68fe8e0c253f74e042fa76ca)

## 📚 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> "Based on the content model I created for 'Create a content model for a company website with services, team members, testimonials, and case studies', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Content management
- **React Server Components** - Server-side rendering
- **Imgix** - Image optimization

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket access

### Installation

1. Install dependencies:

```bash
bun install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=pirates-production
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

3. Run the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies with Related Services

```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related service data
```

### Fetching Team Members

```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials

```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application is fully integrated with Cosmic CMS:

1. **Content Types**: Services, Team Members, Testimonials, Case Studies
2. **Object Metafields**: Connected objects (case studies → services)
3. **File Metafields**: Images with automatic imgix optimization
4. **HTML Textarea**: Rich content for descriptions and details
5. **Depth Queries**: Efficient data fetching with related objects

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

## 📝 Content Management

All content is managed through your Cosmic dashboard:

- **Services**: Add/edit service offerings with icons and pricing
- **Team Members**: Manage crew profiles with photos and bios
- **Testimonials**: Collect and display client reviews
- **Case Studies**: Showcase successful projects with results
- **Related Content**: Link case studies to their related services

## 🎭 Brand Voice

This application uses a fun, pirate-themed voice throughout while maintaining professional functionality. The content speaks like a pirate while delivering real business value!

---

Built with ⚓ by Pirates Inc using [Cosmic](https://www.cosmicjs.com)

<!-- README_END -->