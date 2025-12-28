import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              Web Programming Activity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              How to Use <span className="text-primary">Tailwind CSS</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#tutorial" className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                Start Tutorial
              </a>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-secondary text-foreground/80 border border-black/5 hover:bg-secondary/80 transition-all">
                Official Docs
              </a>
            </div>
          </div>
        </section>

        {/* Tutorial Content */}
        <div id="tutorial" className="container mx-auto px-4 py-16 max-w-4xl">
          
          {/* Step 1 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-base">1</span>
              Installation
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              The easiest way to get started with Tailwind CSS in a Next.js project is by using the built-in setup command.
            </p>
            <div className="bg-[#1e1e1e] p-6 rounded-xl border border-white/10 overflow-x-auto shadow-2xl">
              <code className="text-sm font-mono text-gray-300">
                <span className="text-yellow-400">npx</span> create-next-app@latest my-app --typescript --tailwind --eslint
              </code>
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-base">2</span>
              Utility Classes
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Instead of writing custom CSS, you use utility classes directly in your HTML. Here is a comparison:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional CSS Approach */}
              <div className="p-6 rounded-xl border border-black/10 bg-black/5 dark:bg-white/5 dark:border-white/10">
                <h3 className="font-semibold mb-3 text-muted-foreground/80">Traditional CSS</h3>
                <div className="bg-[#1e1e1e] p-4 rounded-lg mb-4 text-xs font-mono text-gray-300">
                  <div className="text-yellow-200/90">.chat-notification</div> {"{"} <br/>
                  &nbsp;&nbsp;display: flex; <br/>
                  &nbsp;&nbsp;max-width: 24rem; <br/>
                  &nbsp;&nbsp;margin: 0 auto; <br/>
                  &nbsp;&nbsp;padding: 1.5rem; <br/>
                  &nbsp;&nbsp;border-radius: 0.5rem; <br/>
                  &nbsp;&nbsp;background-color: white; <br/>
                  &nbsp;&nbsp;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); <br/>
                  {"}"}
                </div>
              </div>

              {/* Tailwind Approach */}
              <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <h3 className="font-semibold mb-3 text-primary">Tailwind CSS</h3>
                <div className="bg-[#1e1e1e] p-4 rounded-lg mb-4 text-xs font-mono text-gray-300">
                  &lt;div class="<span className="text-accent">p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4</span>"&gt;
                </div>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                   <div className="shrink-0">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white">👋</div>
                   </div>
                   <div>
                     <div className="text-xl font-medium text-black">ChitChat</div>
                     <p className="text-slate-500">You have a new message!</p>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section id="examples" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-base">3</span>
              Responsive Design
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Tailwind makes it incredibly easy to build responsive interfaces using prefixes like <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-primary">md:</code>, <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-primary">lg:</code>, and <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded text-primary">xl:</code>.
            </p>
            
            <div className="p-8 rounded-xl bg-gradient-to-r from-primary via-accent to-primary text-white text-center transition-all duration-500 shadow-xl">
              <p className="font-bold text-2xl mb-2">Resize your browser!</p>
              <p className="block md:hidden">Current View: <span className="font-mono bg-black/20 px-2 rounded">Mobile</span></p>
              <p className="hidden md:block lg:hidden">Current View: <span className="font-mono bg-black/20 px-2 rounded">Tablet (md)</span></p>
              <p className="hidden lg:block">Current View: <span className="font-mono bg-black/20 px-2 rounded">Desktop (lg)</span></p>
            </div>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
}
