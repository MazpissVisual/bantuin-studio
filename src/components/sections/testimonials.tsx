import { visibleTestimonials } from "@/content/testimonials";
import { TestimonialMarquee } from "./testimonial-marquee";

export function Testimonials() {
  const items = visibleTestimonials();
  if (items.length === 0) return null; // tidak ada testimoni sah: section disembunyikan

  return (
    <section aria-labelledby="testimoni" className="pat-dots relative isolate overflow-hidden bg-ground-muted py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-semibold text-accent">Testimoni</p>
        <h2 id="testimoni" className="mt-2 text-3xl sm:text-4xl">Kata mereka</h2>
      </div>
      <TestimonialMarquee items={items} />
    </section>
  );
}
