import './css/App.css';

function App() {
  // todo - mobile, tablet layout
  return (
    <div className="flex h-screen p-4 justify-center bg-neutral-900 font-mono">
      <div className="w-6/12 m-2">
        <div className="w-2/6 inline-block text-white pt-12">
          <div className="p-2 pb-4">
            <ul className="list-none">
              <li className="text-xl">
                Maria Miller
              </li>
              <li>
                Software Developer
              </li>
              <li>
                Colorado Springs, CO
              </li>
            </ul>
          </div>
          <div className="pl-8">
            <ul className="list-disc">
              <li>
                <a href="https://www.linkedin.com/in/mariajmiller13" target="_blank" className="underline hover:text-gray-200">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/MariaJMiller/personal" target="_blank" className="underline hover:text-gray-200">Github</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-4/6 inline-block text-white align-top pt-12 pb-4 px-2 border-b-2 border-gray-300 text-4xl">
          Projects
        </div>
      </div>
    </div>
  );
}

export default App;
