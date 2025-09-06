# BotBuddy Landing Page

Landing page for BotBuddy - AI-powered Shopify Apps & SaaS apps.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Favicon Setup

The project currently uses a simple SVG favicon located at `/public/favicon.svg`. To replace it with your own:

1. **Replace the favicon file**:
   - **Option A (SVG)**: Replace `/public/favicon.svg` with your own SVG favicon
   - **Option B (ICO)**: Create `/public/favicon.ico` and update the layout.tsx configuration
   - **Recommended formats**: SVG (scalable), ICO (multi-size), or PNG
   - **Recommended sizes**: 32x32 pixels minimum, or multi-size ICO (16x16, 32x32, 48x48)

2. **Current favicon configuration** in `src/app/layout.tsx`:
   ```typescript
   icons: {
     icon: '/favicon.svg',
     shortcut: '/favicon.svg',
     apple: '/favicon.svg',
   }
   ```

3. **To use ICO format**: Change the paths in layout.tsx to `/favicon.ico`

3. **Additional icon formats** (optional): You can also add:
   - `apple-touch-icon.png` (180x180) for iOS devices
   - `icon-192.png` and `icon-512.png` for PWA support
   - Place these in the `/public` directory

The favicon will be automatically served by Next.js and appear in browser tabs, bookmarks, and when sharing links.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# landing
# landing
