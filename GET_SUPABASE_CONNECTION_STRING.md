# Get PostgreSQL Connection String from Supabase

You're in the Supabase dashboard. Here's where to find the connection string:

## Steps to Get DATABASE_URL

### 1. Click "Open in Supabase" button
In the screenshot, click the **"Open in Supabase"** button (top right)
- This opens your full Supabase project dashboard

### 2. Go to Project Settings
- In the Supabase dashboard, click **Settings** (bottom left sidebar)
- Click **Database** in the left menu

### 3. Find Connection String
Under "Connection String", you'll see:
- **URI** (this is what you need!)
- **Psql** 
- **JDBC**
- **SQLAlchemy**
- **Go**
- **Node.js**

### 4. Copy the URI
- Click on the **URI** tab
- You'll see a connection string that looks like:
```
postgresql://postgres:[PASSWORD]@db.YOUR_REGION.supabase.co:5432/postgres
```

### 5. Replace [PASSWORD]
The connection string will have `[PASSWORD]` placeholder:
- Look for your database password (set when you created the project)
- Replace `[PASSWORD]` with your actual password
- Example result:
```
postgresql://postgres:your_actual_password@db.us-east-1.supabase.co:5432/postgres
```

### 6. Copy the Full Connection String
- Select all the text
- Copy it (Ctrl+C or Cmd+C)

---

## Add to Vercel

1. Go to your Vercel project (e.g., stpetexo-hypershell)
2. Click **Settings** → **Environment Variables**
3. Click **Add New**:
   - **Name**: `DATABASE_URL`
   - **Value**: Paste your Supabase connection string
   - Click **Add**
4. Go to **Deployments** → **...** → **Redeploy**
5. Wait for "Ready" ✅

---

## Your Supabase Project

- **Project ID**: `qipursooxazqjzpkbpxm`
- **Status**: Available ✅
- **Plan**: Supabase Free Plan

Connection string is ready to use!

