export default function About() {
  return (
    <div className="w-full">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We&apos;re a team of passionate developers and designers building the next generation of web applications.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To create beautiful, performant, and accessible web applications that make a difference in people&apos;s lives.
            We believe in pushing the boundaries of what&apos;s possible on the web while maintaining the highest standards
            of quality and user experience.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <div className="w-full h-full rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-4xl text-blue-600 dark:text-blue-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.description}</p>
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