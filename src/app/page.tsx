export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400 block sm:inline">MyApp</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            A modern Next.js application showcasing beautiful design and seamless navigation.
            Built with Next.js, Tailwind CSS, and TypeScript.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch px-4 sm:px-0">
            <a
              href="/projects"
              className="px-6 py-4 sm:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg sm:text-base touch-manipulation"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-4 sm:py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors text-lg sm:text-base touch-manipulation"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white dark:bg-gray-800 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors touch-manipulation"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Modern Design",
    description: "Beautiful and responsive UI built with Tailwind CSS",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Next.js 14",
    description: "Built with the latest version of Next.js for optimal performance",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "TypeScript",
    description: "Type-safe code for better development experience",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];
