# Set Up PostgreSQL Database for stpetexo

You need a DATABASE_URL to complete the setup. Here are your options:

## Option 1: Vercel PostgreSQL (Easiest - Integrated)

1. Go to https://vercel.com/dashboard
2. Click your stpetexo project (e.g., stpetexo-hypershell)
3. Click **Storage** tab at the top
4. Click **Create New** → **Postgres**
5. Name it: `stpetexo-db` (or any name)
6. Select region (pick closest to you)
7. Click **Create**
8. Vercel will automatically add `POSTGRES_PRISMA_URL` to your environment variables
9. Go to **Environment Variables** and add:
   - **Name**: `DATABASE_URL`
   - **Value**: Copy the value from `POSTGRES_PRISMA_URL`
10. Redeploy

---

## Option 2: Neon PostgreSQL (Free, Easy Setup)

1. Go to https://neon.tech/
2. Click **Sign Up** (free account)
3. Create a new project:
   - **Project Name**: `stpetexo`
   - **Region**: Pick closest to you
   - Click **Create Project**
4. You'll see a connection string. Copy it - it looks like:
   ```
   postgresql://user:password@ep-xyz.region.neon.tech/stpetexo?sslmode=require
   ```
5. Go to Vercel Project → **Settings** → **Environment Variables**
6. Click **Add New**:
   - **Name**: `DATABASE_URL`
   - **Value**: Paste the connection string from Neon
   - Click **Add**
7. Redeploy

---

## Option 3: Supabase PostgreSQL (Free, Feature-Rich)

1. Go to https://supabase.com/
2. Click **Sign Up** (free account)
3. Create new project:
   - **Project Name**: `stpetexo`
   - **Database Password**: Generate a strong password
   - **Region**: Pick closest to you
   - Click **Create New Project**
4. Wait for database to initialize (~1 minute)
5. Go to **Project Settings** → **Database**
6. Under "Connection String", click **URI**
7. Copy the connection string (looks like):
   ```
   postgresql://postgres:[PASSWORD]@db.[RANDOM].supabase.co:5432/postgres
   ```
8. Go to Vercel Project → **Settings** → **Environment Variables**
9. Add `DATABASE_URL` with the connection string
10. Redeploy

---

## Recommended: Use Vercel PostgreSQL

Since your app is already on Vercel, using Vercel's PostgreSQL is the simplest:
- ✅ Automatic environment variable integration
- ✅ No need to copy/paste connection strings
- ✅ Same infrastructure as your app
- ✅ Easy backups and monitoring in Vercel dashboard

---

## After Setting DATABASE_URL

1. Go to Vercel Project → **Settings** → **Environment Variables**
2. Verify `DATABASE_URL` is set (the value should start with `postgresql://`)
3. Go to **Deployments** tab
4. Click **...** on latest deployment → **Redeploy**
5. Wait for "Ready" status
6. Click **Visit** to see your live app!

---

## Next Steps After Deployment

Once the app is live, you'll need to:
1. Implement user registration with database schema
2. Hash passwords with bcryptjs
3. Set up authentication endpoints
4. Create database tables for users, reservations, etc.

But for now, just getting the DATABASE_URL set will let the app deploy successfully! 🚀

