# Create Vercel Project with New Name

Since "stpetexo-vercel" already exists in Vercel, we need to use a different project name.

## Option 1: Use a Different Project Name (RECOMMENDED)

When creating the new project:
- Click "Add New" → "Project"
- Select `Scrumbuddha/stpetexo-vercel` from GitHub
- When it asks for the project name, change it to one of:
  - `stpetexo-next` ⭐
  - `stpetexo-app`
  - `stpetexo-rental`
  - `hypershell-rentals`
  - Or any other name you prefer

Then deploy with this new name.

## Option 2: Delete Old Project First

If you want to keep the name "stpetexo-vercel":

1. Go to Vercel Dashboard
2. Find the old "stpetexo-vercel" project (the one showing NourishStPete)
3. Click on it → Settings → Delete Project
4. Confirm deletion
5. Then create a new project with the name "stpetexo-vercel"

## Recommended: Use `stpetexo-next`

- `stpetexo-next` — Clear that it's the Next.js version
- `stpetexo-app` — Simple alternative
- `hypershell-rentals` — More descriptive of the business

## Steps to Deploy

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Search for and select `Scrumbuddha/stpetexo-vercel`
5. In the project name field, enter: `stpetexo-next` (or your chosen name)
6. Click "Deploy"
7. Wait for deployment (should be "Ready" in ~30 seconds)
8. Click "Visit" to see your live stpetexo app

## Verify Correct App

Once deployed, you should see:
- ✅ "Experience the Future of Mobility" heading
- ✅ Pricing cards (1 Hour $25, 2 Hours $45, Half Day $80, Full Day $140)
- ✅ STPETEXO navbar with lightning icon
- ✅ Hero banner image
- ✅ How It Works section
- ✅ NOT the NourishStPete "healthy food" page

## GitHub Repository Status ✅

Repository: `Scrumbuddha/stpetexo-vercel`
Latest Commit: `3634bdc` - Add force Vercel sync guide
Code: Next.js 16 with React 19, TypeScript, Bootstrap 5
Status: Ready to deploy!
