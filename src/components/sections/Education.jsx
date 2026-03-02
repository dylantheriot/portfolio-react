import { PopIn } from '../shared/ScrollAnimation';

export default function Education() {
  return (
    <section className="py-6 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <PopIn threshold={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-0 text-secondary text-sm">
            <span className="text-text font-bold">Texas A&M University</span>
            <span className="text-tertiary mx-2 hidden md:inline">&mdash;</span>
            <span>B.S. Honors Computer Science, Cybersecurity Minor</span>
            <span className="text-tertiary mx-2 hidden md:inline">&mdash;</span>
            <span className="text-text font-bold">4.0 GPA</span>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
