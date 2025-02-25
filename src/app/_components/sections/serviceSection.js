import { serviceItem } from "@/app/_consts/serviceItem";
import { SectionLayout } from "../layouts/sectionLayout";

export function ServiceSection({ ...props }) {
  return (
    <SectionLayout {...props}>
      <div className="max-w-7xl mx-auto px-6 py-24 text-center bg-white rounded-2xl shadow-xl">
        <h2 className="text-5xl font-extrabold mb-12">✨ 이즐리 ✨</h2>
        {serviceItem.map((item) => (
          <div
            key={item.id}
            className="relative bg-opacity-90 rounded-2xl shadow-sm p-10 mb-16 max-w-6xl mx-auto transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
            <p className="text-lg text-black mb-6">{item.subtitle}</p>
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
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
