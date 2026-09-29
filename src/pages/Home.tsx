function Home() {
  return (
    <>
      <header className="flex flex-col items-center gap-3">
        <div className="">
          <p className="font-bold text-gray-400">Hi I'm</p>
          <h1 className="text-4xl font-extrabold">Daniels Kuzmins</h1>
          <h2 className="text-3xl">Full Stack Developer</h2>
          <p>
            I build modern web applications with a focus on clean structure,
            usability and continious improvement
          </p>
          <ul className="flex gap-3">
            <li className="bg-accent rounded-lg px-4 py-2">View Projects</li>
            <li className="rounded-lg px-4 py-2 outline-1">About Me</li>
          </ul>
        </div>
        <div className="relative z-0">
          <img
            src="/portrait.jpg"
            alt="Picture of me"
            className="h-auto w-full max-w-3xs rounded-2xl object-cover shadow-2xl outline-2"
          />
          <div className="absolute -bottom-4 -z-1 ml-4 h-full w-full max-w-3xs rounded-2xl bg-black outline-2"></div>
        </div>
      </header>
    </>
  );
}
export default Home;
