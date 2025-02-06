import '../animations.css';

export default function About() {
  return (
    <div className="w-full animate-fade-in">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-16 animate-slide-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            We&apos;re a team of passionate developers and designers building the next generation of web applications.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To create beautiful, performant, and accessible web applications that make a difference in people&apos;s lives.
            We believe in pushing the boundaries of what&apos;s possible on the web while maintaining the highest standards
            of quality and user experience.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center animate-slide-in" style={{ animationDelay: '0.3s' }}>Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl 
                  transition-all duration-300 transform hover:scale-[1.02] animate-scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <div className="w-full h-full rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center 
                    transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 transform group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const team = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    description: "Full-stack developer with 8 years of experience in building scalable web applications.",
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    description: "Creative designer passionate about creating intuitive and beautiful user experiences.",
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    description: "Experienced in leading teams and delivering successful products that users love.",
  },
]; 