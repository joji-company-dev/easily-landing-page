import { SERVICE_INFOS } from "@/app/_consts/service_info";
import { SectionLayout } from "../layouts/sectionLayout";
import { TypographyH2, TypographyP } from "../ui/typography";

export function ServiceSection({ ...props }) {
  return (
    <SectionLayout {...props}>
      <div className="max-w-7xl mx-auto px-6 py-24 text-center bg-white rounded-2xl shadow-xl">
        {SERVICE_INFOS.map((item) => (
          <div
            key={item.id}
            className="relative p-10 mb-16 max-w-6xl mx-auto flex flex-col gap-4"
          >
            <TypographyH2>{item.title}</TypographyH2>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg">
              <video
                className="w-full h-full object-cover"
                src={item.videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <TypographyP
              className="whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: item.subtitle }}
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
