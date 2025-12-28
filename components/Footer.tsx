// Simple Functional Component for the Footer
export default function Footer() {
  return (
    // 'border-t' adds a thin line at the top of the footer
    <footer className="py-10 border-t border-black/5 dark:border-white/10 bg-background/50 text-center text-sm text-gray-500">
      <div className="container mx-auto px-4">
        {/* We use JavaScript inside {} to get the current year automatically */}
        <p>&copy; {new Date().getFullYear()} Tailwind Tutorial. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-70">
          Built for the Web Programming.
        </p>
      </div>
    </footer>
  );
}
