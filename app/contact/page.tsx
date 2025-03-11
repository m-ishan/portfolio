export default function Contact() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-black mb-6">Contact Me</h1>
        <p className="text-gray-700 mb-4">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
        <ul className="text-gray-700">
          <li>
            Email:{' '}
            <a href="mailto:ishan.m1809@gmail.com" className="text-red-500">
              ishan.m1809@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/ishan-mukherjee-8277aa2aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500"
            >
              Ishan Mukherjee
            </a>
          </li>
        </ul>
      </div>
    );
  }