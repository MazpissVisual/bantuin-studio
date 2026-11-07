import { ConsultButton } from "@/components/ui/cta-button";
import { RingsBackground } from "./rings-bg";
import { TrustRow } from "./trust-row";

export function ClosingCta({
  title = "Ceritakan kebutuhanmu, kami bantu tentukan solusinya.",
  categoryName,
  serviceName,
}: {
  title?: string;
  categoryName?: string;
  serviceName?: string;
}) {
  return (
    <section data-cta className="pat-rings relative isolate overflow-hidden on-field bg-field py-16 text-center text-on-field-2">
      <RingsBackground />
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        <div className="mt-8 flex justify-center">
          <ConsultButton categoryName={categoryName} serviceName={serviceName} />
        </div>
        <TrustRow onField center />
      </div>
    </section>
  );
}
