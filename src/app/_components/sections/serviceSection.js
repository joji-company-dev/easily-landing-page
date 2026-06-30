import { SERVICE_INFOS } from "@/app/_consts/service_info";
import Image from "next/image";
import { SectionLayout } from "../layouts/sectionLayout";
import { TypographyH2, TypographyP } from "../ui/typography";

export function ServiceSection({ ...props }) {
  return (
    <SectionLayout {...props}>
      <div className="max-w-7xl px-0 md:px-6 py-16 text-center bg-white rounded-2xl shadow-xl flex flex-col gap-8">
        {SERVICE_INFOS.map((item, index) => (
          <div key={item.id} className="relative px-4  flex flex-col gap-4">
            <TypographyH2>{item.title}</TypographyH2>
            <div className="service-demo-frame relative w-full aspect-video overflow-hidden rounded-lg border bg-white shadow-lg">
              <div
                className="service-demo-canvas"
                style={{
                  "--service-focus-origin": item.focus.origin,
                  "--service-focus-zoom": item.focus.zoom,
                }}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={item.imageSrc}
                  alt={`${item.title} 화면 예시`}
                  fill
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  priority={index === 0}
                />
                <span
                  className="service-demo-focus"
                  style={{
                    left: item.focus.rect.left,
                    top: item.focus.rect.top,
                    width: item.focus.rect.width,
                    height: item.focus.rect.height,
                  }}
                  aria-hidden="true"
                />
                {item.focus.playback && (
                  <span
                    className="service-demo-playback"
                    style={{
                      left: item.focus.playback.left,
                      top: item.focus.playback.top,
                      width: item.focus.playback.width,
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
            <TypographyP className="mx-auto max-w-3xl whitespace-pre-line">
              {item.subtitle}
            </TypographyP>
            {index !== SERVICE_INFOS.length - 1 && (
              <div className="w-full h-[1px] md:my-4 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
