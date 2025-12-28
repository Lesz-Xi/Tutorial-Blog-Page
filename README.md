# Tailwind CSS Tutorial (The "Champagne" Edition 🥂)

Yo! 👋 This is a little Next.js project I whipped up to demo how **Tailwind CSS** works. 

I didn't want the boring default colors, so I customized the theme to use these fancy **Champagne & Gold** CSS variables. It's got dark mode support built-in too, which is pretty sweet.

## How to Run It

It's a standard Next.js app, so you know the drill:

```bash
npm run dev
# or yarn, pnpm, bun... whatever you prefer
```

Open [http://localhost:3000](http://localhost:3000) and check it out.

## What's Inside?

If you're poking around the code:

- **`app/page.tsx`**: This is where the actual tutorial content lives. I added a bunch of comments to explain the Tailwind classes.
- **`app/globals.css`**: Here's where I defined the custom CSS variables (`--primary`, `--accent`, etc.) for that gold theme.
- **`components/`**: Just a simple Header and Footer to keep things tidy.

## Deploying

Honestly, just throw it on **Vercel**. It's zero config and works perfectly with Next.js.

***

*Happy Coding!* 🚀

## GitHub Repository

Check out the code here: [https://github.com/Lesz-Xi/Tutorial-Blog-Page](https://github.com/Lesz-Xi/Tutorial-Blog-Page)

## Reflection

### What I Learned
Honestly, getting used to **Tailwind CSS** was the biggest thing. It felt weird at first writing styles right inside the HTML (well, JSX), but once I got the hang of it, it was actually way faster than flipping between files. I also learned how **Next.js** handles pages and how easy it is to make everything responsive with just a few `md:` or `lg:` prefixes.

### Challenges Encountered
The biggest headache was definitely **Dark Mode colors**. I set up this nice Champagne theme, but when I switched to dark mode, everything turned into this intense yellow that looked terrible. I had to figure out how CSS variables worked in `globals.css` to tweak the specific hex codes for dark mode so it still looked "premium" and not like a caution tape.

### What I Enjoyed
I really liked customizing the design. Making that **gradient banner** and seeing it work on my phone (mobile view) vs my laptop was super satisfying. Also, deploying to **Vercel** was kind of magic—I just pushed my code and boom, it was live on the internet.
