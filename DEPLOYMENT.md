# STPETEXO Deployment Guide

## Current Status

✅ **Complete**: Next.js 16 application with responsive design from original Flask stpetexo
✅ **Built**: All pages compiled successfully, ready for deployment
⏳ **Pending**: GitHub repository creation and Vercel deployment

## Quick Start - Deploy to Vercel

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `stpetexo-vercel`
3. Choose "Public" or "Private" as preferred
4. **Do NOT initialize with README** (we have our own)
5. Click "Create repository"

### Step 2: Push Code to GitHub

From your terminal in the project directory:

```bash
# Set up the remote
git remote set-url origin https://github.com/Scrumbuddha/stpetexo-vercel.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Search for `stpetexo-vercel`
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
6. Add Environment Variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXTAUTH_SECRET`: Random secret key
   - `NEXTAUTH_URL`: Your Vercel deployment URL
7. Click "Deploy"

## Environment Variables

```
DATABASE_URL=postgresql://user:password@host:5432/stpetexo
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=https://yourdomain.vercel.app
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Next Steps

- [ ] Database schema implementation
- [ ] User authentication with bcryptjs
- [ ] Email notifications
- [ ] Reservation system
- [ ] Admin dashboard
