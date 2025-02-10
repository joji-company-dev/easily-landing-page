export function ServiceSection() {
  const serviceItem = [
    {
      id: 1,
      title: "서비스1",
      subtitle: "이즐리는 여러분의 일상에 행복을 줍니다.",
      videoSrc:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 2,
      title: "서비스2",
      subtitle: "이즐리는 여러분의 일상에 행복을 줍니다.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 3,
      title: "서비스3",
      subtitle: "이즐리는 여러분의 일상에 행복을 줍니다.",
      videoSrc:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center bg-gradient-to-b text-black">
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
  );
}
