# Set Up Vercel Environment Variables

You're getting an error because the environment variables referenced in `vercel.json` don't exist as secrets in Vercel.

## Quick Fix

### Step 1: Go to Vercel Project Settings
1. Go to your Vercel project dashboard (e.g., stpetexo-hypershell)
2. Click **Settings** at the top
3. Click **Environment Variables** in the left sidebar

### Step 2: Create the Required Secrets

You need to create THREE environment variables. Click **"Add New"** for each:

#### Secret 1: DATABASE_URL
- **Name**: `DATABASE_URL`
- **Value**: Your PostgreSQL connection string
  - If you don't have a database yet, use a placeholder or skip for now
  - Example: `postgresql://user:password@localhost:5432/stpetexo`
- **Click**: Add

#### Secret 2: NEXTAUTH_SECRET
- **Name**: `NEXTAUTH_SECRET`
- **Value**: Generate a random secret (copy one of these):
  - `$(openssl rand -hex 32)` 
  - Or use: `d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0`
  - Or go to [this generator](https://generate-secret.vercel.app/32) to create one
- **Click**: Add

#### Secret 3: NEXTAUTH_URL
- **Name**: `NEXTAUTH_URL`
- **Value**: Your Vercel deployment URL
  - Example: `https://stpetexo-hypershell.vercel.app`
  - Or use: `https://{your-project-name}.vercel.app`
- **Click**: Add

### Step 3: Redeploy

1. Go back to **Deployments** tab
2. Find your latest deployment
3. Click the **...** menu and select **Redeploy**
4. Wait for it to complete (should show "Ready")

### Step 4: Verify

Click **Visit** and you should now see the stpetexo app loading without environment variable errors.

---

## Optional: Set Up Database

If you want a real database (required for user registration/login):

### Option A: Vercel PostgreSQL (Easiest)
1. Go to Vercel Dashboard → **Storage**
2. Click **Create New** → **Postgres**
3. Follow the prompts
4. Copy the connection string
5. Add it as `DATABASE_URL` environment variable

### Option B: Neon PostgreSQL (Free Tier)
1. Go to https://neon.tech
2. Sign up and create a project
3. Copy the connection string
4. Add it as `DATABASE_URL` in Vercel

### Option C: Supabase (Free Tier)
1. Go to https://supabase.com
2. Create a new project
3. Get the PostgreSQL connection string
4. Add it as `DATABASE_URL` in Vercel

---

## Current Status

- GitHub Repository: `Scrumbuddha/stpetexo-vercel` ✅
- Latest Code: Commit `8d2e425` ✅
- Next.js App: Ready ✅
- Vercel Project: Deployed ✅
- Environment Variables: NEED TO SET UP 👈 You are here

Just add those 3 environment variables and redeploy!

