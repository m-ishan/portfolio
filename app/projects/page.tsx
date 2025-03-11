export default function Projects() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-black mb-6">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white/90 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Task Manager Website</h2>
            <p className="text-gray-700 mb-2">
              A full-stack web application built with Angular, Node.js, Express, and MongoDB...
            </p>
            <p className="text-gray-500 text-sm">July 2024 - Present</p>
          </div>
          {/* Project 2 */}
          <div className="bg-white/90 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Assembly x86-64 Compiler</h2>
            <p className="text-gray-700 mb-2">
              Developed a compiler for a C-like language with optimized assembly code generation...
            </p>
            <p className="text-gray-500 text-sm">Aug 2024 - Present</p>
          </div>
          {/* Project 3 */}
          <div className="bg-white/90 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Rent-A-House Application</h2>
            <p className="text-gray-700 mb-2">
              A Java and JSwing desktop application that streamlines property rentals...
            </p>
            <p className="text-gray-500 text-sm">Aug 2023 - Dec 2023</p>
          </div>
        </div>
      </div>
    );
  }