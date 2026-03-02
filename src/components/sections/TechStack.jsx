import { PopIn } from '../shared/ScrollAnimation';

const techs = [
  'Next.js', 'TypeScript', 'React', 'GraphQL', 'TailwindCSS',
  'Node.js', 'AWS', 'SST', 'Docker', 'Python',
];

export default function TechStack() {
  return (
    <section className="py-6 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <PopIn threshold={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-secondary text-sm">
            <span className="text-tertiary uppercase tracking-[0.2em] text-xs mr-1.5">Tech Stack</span>
            {techs.map((tech, i) => (
              <span key={tech} className="whitespace-nowrap">
                {tech}{i < techs.length - 1 && <span className="ml-1.5">·</span>}
              </span>
            ))}
          </div>
        </PopIn>
      </div>
    </section>
  );
}
