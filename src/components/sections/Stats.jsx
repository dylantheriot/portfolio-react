import AnimatedCounter from '../ui/AnimatedCounter';
import { PopIn } from '../shared/ScrollAnimation';

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <PopIn threshold={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter value={500} suffix="K+" label="Users Served" />
            <AnimatedCounter value={10} suffix="x" label="Revenue Growth" />
            <AnimatedCounter value={2} suffix="" label="Companies Built" />
            <AnimatedCounter value={8} suffix="" label="Engineering Roles" />
          </div>
        </PopIn>
      </div>
    </section>
  );
}
