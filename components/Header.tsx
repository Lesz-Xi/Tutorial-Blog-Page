// "use client" tells Next.js this component runs in the browser (needed for clicks/scrolls)
"use client";

import Link from 'next/link';

export default function Header() {
  // This function handles the "Scroll to Top" behavior when Home is clicked
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent the default instant jump
    e.preventDefault();
    
    // Smoothly scroll to the top of the window (0, 0 coordinates)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Update the browser URL to '/' without reloading the page
    window.history.pushState({}, '', '/');
  };

  return (
    // 'sticky top-0' makes the header stick to the top as you scroll down
    // 'backdrop-blur-md' gives it that cool frosted glass effect
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-black/5 dark:border-white/10 support-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* The Logo Link - Triggers scroll to top */}
        <Link 
          href="/" 
          onClick={scrollToTop}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          TailwindBlog
        </Link>
        
        {/* Desktop Navigation Menu (Hidden on mobile) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="hover:text-primary transition-colors"
          >
            Home
          </Link>
          <a href="#tutorial" className="hover:text-primary transition-colors">Tutorial</a>
          <a href="#examples" className="hover:text-primary transition-colors">Examples</a>
        </nav>
      </div>
    </header>
  );
}
