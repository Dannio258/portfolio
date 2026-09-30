type CardProps = {
  title: string;
  description: string;
  tech: string[];
  linkTo: string;
  imgLink: string;
};

function ProjectCard({ title, description, tech, linkTo, imgLink }: CardProps) {
  return (
    <>
      <div className="bg-strong p-2 rounded-lg flex flex-col gap-4">
        <img src={imgLink} alt="Project UI Preview" />
        <h1>{title}</h1>
        <p>{description}</p>
        <ul className="flex gap-2">
          {tech.map((t) => (
            <li>{t} &bull;</li>
          ))}
        </ul>
        <a href={linkTo}>View Project &rarr;</a>
      </div>
    </>
  );
}
export default ProjectCard;
