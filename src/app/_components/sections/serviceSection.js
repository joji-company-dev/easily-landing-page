import { SERVICE_INFOS } from "@/app/_consts/service_info";
import { SectionLayout } from "../layouts/sectionLayout";
import { TypographyH2, TypographyP } from "../ui/typography";

export function ServiceSection({ ...props }) {
  return (
    <SectionLayout {...props}>
      <div className="max-w-7xl px-0 md:px-6 py-16 text-center bg-white rounded-2xl shadow-xl flex flex-col gap-8">
        {SERVICE_INFOS.map((item, index) => (
          <div key={item.id} className="relative px-4  flex flex-col gap-4">
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
            {index !== SERVICE_INFOS.length - 1 && (
              <div className="w-full h-[1px] md:my-4 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
