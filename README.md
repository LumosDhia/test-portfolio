# My Personal Portfolio

A clean, minimal portfolio website built with Next.js, Tailwind CSS, and Shadcn UI. Features an email contact form and blog.

> Built this for fun and decided to open source it properly after getting lots of requests for permission to copy it!

## Live Demo

🌐 Check it out here: **[https://tedawf.com](https://tedawf.com)**

![Portfolio Screenshot](public/tedawf-com-2.png)

## Features

- Minimal design with Shadcn UI
- Light/dark mode toggle
- Contact form with email integration
- Responsive mobile design
- Blog section

## Tech Stack

- Next.js
- Tailwind CSS
- Shadcn UI
- Cloudflare Pages (hosting)
- Resend (email)

## Getting Started

```bash
git clone https://github.com/tedawf/tedawf.com ted-portfolio
cd ted-portfolio
npm install
cp .env.example .env.local
# Add your own API keys to .env.local
npm run dev
```

## Environment Variables

```env
# Add your environment variables here if needed
```

## Customization

### Personal Information
- Update personal info in `src/data/*.json`
- Add your resume to `public/resume.pdf`

### Adding Projects

#### Simple Projects (No Read More)
1. **Add to projects.json**: Edit `src/data/projects.json`
```json
{
  "projects": [
    {
      "name": "Your Project Name",
      "description": "Brief description of your project",
      "image": "/your-project-image.png",
      "tags": ["React", "TypeScript", "TailwindCSS"],
      "links": [
        {
          "name": "Live Demo",
          "href": "https://your-project.com",
          "icon": "globe"
        },
        {
          "name": "Source Code",
          "href": "https://github.com/yourusername/your-project",
          "icon": "github"
        }
      ]
    }
  ]
}
```

#### Projects with Read More (Detailed Articles)
1. **Add to projects.json**: Same as above, but the name must be in the `hasArticle` array in `ProjectCard.tsx`
2. **Create MDX file**: Create `content/projects/your-project-slug.mdx`
```mdx
---
title: "Your Project Title"
summary: "Brief summary of your project"
publishedAt: "2024-01-15"
updatedAt: "2024-03-20"
tags: ["React", "TypeScript", "TailwindCSS"]
image: "/your-project-image.png"
---

# Your Project Title

Write your detailed project description here using Markdown.

## Features

- Feature 1
- Feature 2
- Feature 3

## Tech Stack

- React
- TypeScript
- TailwindCSS

## Challenges & Solutions

Describe the challenges you faced and how you solved them.

## Results

Show the results and impact of your project.
```

3. **Update ProjectCard.tsx**: Add your project name to the `hasArticle` array:
```typescript
const hasArticle = ["TT4D", "Tradingview Telegram Alerts", "NFTVue", "Your Project Name"].includes(name);
```

#### Available Icons for Links
- `globe` - Website/Demo
- `github` - Source code
- `youtube` - Video/Demo
- `external-link` - External link
- `mail` - Email
- `twitter` - Twitter
- `linkedin` - LinkedIn

### Blog Posts
- Replace blog posts in `content/` or remove the blog section entirely
- Blog posts use the same MDX format as project articles

## Deployment

### Deploy to Cloudflare Pages (Recommended)

**Why Cloudflare Pages over Vercel?**

- **Better Performance**: Cloudflare's global CDN provides faster loading times worldwide
- **More Generous Limits**: Higher bandwidth and build time limits on the free tier
- **Better Caching**: Superior caching mechanisms for static assets
- **Cost-Effective**: More generous free tier with better scaling options
- **Global Edge Network**: 300+ data centers worldwide for optimal performance

**Deployment Steps:**

1. **Push to GitHub** - Ensure your code is in a GitHub repository
2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Connect to Git"
   - Select your GitHub repository
3. **Configure Build Settings**:
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (or leave empty)
4. **Add Environment Variables** (if needed):
   - Go to Settings → Environment Variables
   - Add any required environment variables
5. **Deploy** - Cloudflare will automatically build and deploy your site

**Build Optimization:**
- The project is configured with `output: 'export'` for static generation
- Webpack cache is excluded to stay under Cloudflare's 25MB file limit
- Images are unoptimized for static export compatibility

**Custom Domain Setup:**
- Add your custom domain in Cloudflare Pages dashboard
- Update your domain's nameservers to Cloudflare's
- SSL certificate is automatically provisioned

### Alternative: Deploy to Vercel

If you prefer Vercel:

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Deploy

## Costs

- Domain: ~$20/year
- Hosting: Free tier

## License

MIT

## Featured on YouTube!

📺 **[Live Portfolio Review by Anthony Sistilli](https://www.youtube.com/watch?v=aUJiNyb3cvM&t=40s)** - Got reviewed live on his stream!

🔥 [Started a trend?](https://youtu.be/ib-Nlg9qWBw?si=1atsKJyfYDXtFVnE&t=400) - Apparently this portfolio design inspired others!

---

Feel free to fork and make it your own! Would love to see what you guys build with it ✨
