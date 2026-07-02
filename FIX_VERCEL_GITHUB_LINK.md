# Fix Vercel GitHub Connection for stpetexo-vercel

## Problem
Vercel is deploying the NourishStPete app instead of the stpetexo-vercel Next.js app.

**Root Cause**: The Vercel project `stpetexo-vercel` is connected to the wrong GitHub repository.

---

## Solution: Reconnect to Correct GitHub Repository

### Step 1: Go to Vercel Project Settings
1. Open [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **stpetexo-vercel** project
3. Click **Settings** at the top
4. Click **Git** in the left sidebar

### Step 2: Disconnect Current Repository
1. Under "GitHub", you'll see the currently connected repository (probably shows "nourishstpete" or similar)
2. Click **Disconnect** button
3. Confirm the disconnection

### Step 3: Reconnect to stpetexo-vercel Repository
1. After disconnecting, click **Connect** to GitHub
2. Authorize Vercel to access your GitHub account (if prompted)
3. Search for **stpetexo-vercel**
4. Click to select `Scrumbuddha/stpetexo-vercel`
5. Vercel will ask about root directory - leave it as **/** (root)
6. Click **Connect**

### Step 4: Verify Connection
1. Go back to **Deployments** tab
2. Vercel should now show your stpetexo-vercel commits (starting with `0e8882f`)
3. If no new deployment started, manually click **Redeploy** on the latest commit
4. Wait for deployment to complete (should show "Ready")

### Step 5: Verify Correct App Deployed
Once deployment is "Ready", click **Visit** and verify:
- [ ] Homepage loads with "Experience the Future of Mobility" heading
- [ ] Pricing cards visible (1 Hour $25, 2 Hours $45, etc.)
- [ ] Navigation bar with "STPETEXO" logo
- [ ] Banner image displays in hero section
- [ ] "How It Works" section visible
- [ ] Login/Sign Up buttons work

---

## Current Repository Details

**Correct Repository**: `Scrumbuddha/stpetexo-vercel`
**Main Branch**: `main`
**Latest Commit**: `0e8882f` - Add Vercel redeployment instructions

---

## Alternative: Delete and Recreate Project

If the above doesn't work, you may need to:

1. Go to Vercel Dashboard
2. Click stpetexo-vercel project → **Settings**
3. Scroll to bottom → **Delete Project**
4. Create a new project:
   - Click "Add New" → "Project"
   - Select "Import Git Repository"
   - Find and select `Scrumbuddha/stpetexo-vercel`
   - Configure build settings (Next.js should auto-detect)
   - Add environment variables if needed
   - Deploy

---

## Questions?
The stpetexo-vercel repository on GitHub has the correct Next.js code and is ready to deploy.
Just need to fix the GitHub connection in Vercel!
