# Moodly

A simple mood tracker that lets you log how you're feeling each day on an interactive calendar.

**Try it live:** [moooodly.netlify.app](https://moooodly.netlify.app)

## Overview

Built with Next.js, React, and Firebase. Sign up, log your mood each day, and watch your calendar fill up with patterns over time.

## What You Get

- **Sign Up & Login** - Simple email/password authentication
- **Pick Your Mood** - Five mood options to choose from
- **Interactive Calendar** - View mood history with color-coded days
- **Stats Dashboard** - Track days logged, average mood, time remaining
- **Responsive** - Works on phone, tablet, and desktop
- **Real-time Sync** - All data saves to Firebase instantly

## Tech We Used

**Frontend:**

- Next.js 16.2.1 - Framework
- React 19.2.3 - UI library
- Tailwind CSS 4 - Styling
- PostCSS 4 - CSS processing

**Backend & Database:**

- Firebase 12.11.0 - Auth and database

## Project Structure

```
moodly/
├── app/                          # Next.js app directory
│   ├── layout.js                 # Root layout with navigation
│   ├── page.js                   # Homepage (landing page)
│   ├── globals.css               # Global styles
│   ├── head.js                   # HTML head metadata
│   └── dashboard/
│       └── page.js               # Dashboard page route
├── components/                   # Reusable React components
│   ├── Button.js                 # Reusable button component
│   ├── Calendar.js               # Interactive calendar for mood tracking
│   ├── CallToAction.js           # CTA button/link component
│   ├── Dashboard.js              # Main dashboard with mood selection
│   ├── Hero.js                   # Landing page hero section
│   ├── Loading.js                # Loading spinner component
│   ├── Login.js                  # Login/Register form
│   ├── Logout.js                 # Logout button
│   └── Main.js                   # Main content wrapper
├── context/                      # React Context for state management
│   └── AuthContext.js            # Authentication context (user state, auth methods)
├── public/                       # Static assets
├── utils/                        # Utility functions
│   ├── baseRating.js             # Mood rating calculation
│   ├── demoData.js               # Demo calendar data
│   └── gradients.js              # Gradient color mappings
├── firebase.js                   # Firebase configuration and initialization
├── package.json                  # Project dependencies and scripts
├── next.config.mjs               # Next.js configuration
├── jsconfig.json                 # JavaScript configuration
├── postcss.config.mjs            # PostCSS configuration
└── eslint.config.mjs             # ESLint configuration
```

## Getting Started

## How to Get It Running

### What You Need

- Node.js 18+ (LTS recommended)
- npm or yarn
- Firebase project credentials

### Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/thehappyredwolf/moodly.git
   cd moodly
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add Firebase credentials**

   Create `.env.local` with your Firebase config:

   ```env
   NEXT_PUBLIC_API_KEY=your_api_key
   NEXT_PUBLIC_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_APP_ID=your_app_id
   ```

4. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Scripts You Can Run

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Check code

## How It Actually Works

### The User Journey

1. **You land on the home page** - See what Moodly's about and check out a demo calendar
2. **Sign up or log in** - Super quick, just email and password
3. **Head to your dashboard** - This is where all your mood action happens
4. **Pick your mood** - Five emoji options to choose from
5. **Check your calendar** - See your mood history with color-coded days
6. **Look at your stats** - How many days you've tracked, what your average mood is, that kind of thing

### Where Your Data Lives

Everything gets stored in Firestore with this structure:

```javascript
users/{uid}
  → {year}
    → {month}
      → {day}: mood_value (1-5)
```

So if you logged "Good" (4) on March 26th, 2026, it'd look like this:

```javascript
{
  2026: {
    2: {  // March (0-indexed, so 2 = March)
      26: 4  // Mood rating (1=Awful, 5=Elated)
    }
  }
}
```

### Main Parts of the App

- **Dashboard** - Where you select your mood and it all gets saved
- **Calendar** - Displays your mood history, lets you jump between months and years
- **AuthContext** - Handles login/logout and pulls your mood data from Firebase
- **Login Component** - The sign up and login forms

## Design

Built with Tailwind CSS featuring:

- Google Fonts (Geist, Geist Mono, Fugaz One)
- Color gradients for mood visualization
- Responsive mobile-first layout
- Color-coded mood days

## Future Ideas

- [ ] Advanced mood analytics and trends
- [ ] Goals and achievements system
- [ ] Journaling notes for moods
- [ ] Dark mode support
- [ ] Push notifications for reminders
- [ ] Share stats with friends
- [ ] Data export

## Environment Variables

Required Firebase environment variables (from your Firebase Console):

| Variable                          | Description                  |
| --------------------------------- | ---------------------------- |
| `NEXT_PUBLIC_API_KEY`             | Firebase API Key             |
| `NEXT_PUBLIC_AUTH_DOMAIN`         | Firebase Auth Domain         |
| `NEXT_PUBLIC_PROJECT_ID`          | Firebase Project ID          |
| `NEXT_PUBLIC_STORAGE_BUCKET`      | Firebase Storage Bucket      |
| `NEXT_PUBLIC_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `NEXT_PUBLIC_APP_ID`              | Firebase App ID              |

## Performance

- Server-side rendering for fast page loads
- Optimized Tailwind CSS bundle
- Firebase backend scalability
- Mobile-first responsive design

## Contributing

Found a bug or have an idea? Fork the repo and submit a pull request.

## License

[MIT](LICENSE) - use it however you want
