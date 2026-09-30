import { Link } from "react-router-dom";
import ProjectCard from "../pageComponents/ProjectCard";

function Home() {
  return (
    <>
      <header className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="flex flex-col gap-5">
          <p className="font-bold text-gray-400">Hi I'm</p>
          <h1 className="text-center text-3xl font-extrabold text-nowrap sm:text-4xl md:text-5xl">
            Daniels Kuzmins
          </h1>
          <h2 className="w-fit rounded-2xl px-4 py-3 text-lg text-nowrap outline-1 sm:text-xl lg:text-2xl">
            Full Stack Developer
          </h2>
          <p className="text-sm text-gray-400">
            I build modern web applications with a focus on clean structure,
            usability and continious improvement
          </p>
          <ul className="flex flex-col gap-3 sm:flex-row">
            <li className="bg-accent rounded-lg px-4 py-3">
              <Link to={"/projects"}>View Projects</Link>
            </li>
            <li className="rounded-lg px-4 py-3 outline-1">
              <Link to={"/about"}>About Me</Link>
            </li>
          </ul>
        </div>
        <div className="relative z-0">
          <img
            src="/portrait.jpg"
            alt="Picture of me"
            className="h-auto w-full max-w-xs rounded-2xl object-cover shadow-2xl outline-2 sm:max-w-sm"
          />
          <div className="absolute -bottom-4 -z-1 ml-4 hidden h-full w-full max-w-sm rounded-2xl bg-black outline-2 lg:block"></div>
        </div>
      </header>
      <section className="mt-6">
        <h1 className="font-bold">A Few Projects</h1>
        <ProjectCard
          title="Group Room"
          description="Something cool"
          imgLink="/portrait.jpg"
          tech={["React", "TailwindCSS"]}
          linkTo="google.com"
        />
      </section>
    </>
  );
}
export default Home;
