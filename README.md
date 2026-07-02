# STPETEXO - Hypershell Exoskeleton Rentals

A modern Next.js web application for renting powered exoskeletons in Saint Petersburg, Florida.

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **Database**: PostgreSQL (via Neon or Vercel PostgreSQL)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (Neon or Vercel PostgreSQL recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stpetexo-vercel.git
cd stpetexo-vercel
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file with the following variables:
```
DATABASE_URL=postgresql://user:password@host:5432/stpetexo
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Responsive Design**: Mobile-first design using Bootstrap 5
- **Hero Section**: Eye-catching landing page with call-to-action
- **Pricing Cards**: Display rental options (1 Hour, 2 Hours, Half Day, Full Day)
- **About Section**: Product information with images
- **How It Works**: 3-step process explanation
- **Authentication**: User registration and login (placeholder routes)
- **Admin Dashboard**: (Future) For managing reservations and users

## Project Structure

```
stpetexo/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── globals.css         # Global styles and custom CSS
│   ├── page.tsx            # Homepage
│   ├── api/
│   │   └── auth/
│   │       ├── login/      # Login API route
│   │       └── register/   # Registration API route
│   └── auth/
│       ├── login/          # Login page
│       └── register/       # Registration page
├── package.json
├── tsconfig.json
└── next.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## TODO Items

- [ ] Set up PostgreSQL database schema
- [ ] Implement user registration with bcryptjs password hashing
- [ ] Implement user login with session/JWT authentication
- [ ] Add email notifications (registration confirmations, admin alerts)
- [ ] Create reservation/booking system
- [ ] Build admin dashboard
- [ ] Set up Vercel deployment with environment variables
- [ ] Add contact form
- [ ] Create terms & conditions page

## Deployment

### Vercel

1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

## License

© 2026 STPETEXO. All rights reserved.
