export default function Home() {
  return (
    <main className="p-4">
      <header className="header mb-6">
        <h1 className="text-xl font-semibold">Home</h1>
      </header>
      
      <div className="space-y-4">
        <div className="card">
          <h2 className="text-lg font-medium mb-2">Welcome</h2>
          <p className="text-text-secondary">
            This is a mobile-first web application built with Next.js and styled to match native mobile apps.
          </p>
        </div>

        <div className="card">
          <h2 className="text-lg font-medium mb-2">Features</h2>
          <ul className="space-y-2 text-text-secondary">
            <li>• Dark/Light theme support</li>
            <li>• Native-like UI components</li>
            <li>• Mobile-optimized layout</li>
            <li>• Smooth transitions</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
