export function ServiceSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold mb-6">서비스1</h2>
      <p className="text-lg text-muted-foreground mb-8">
        <span className="text-primary">이즐리</span>는 다양한 서비스로 영상
        기획을 돕습니다.
      </p>
      <div className="relative mb-20 w-full max-w-6xl mx-auto aspect-video">
        <video
          className="w-full h-auto rounded-lg"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <h2 className="text-3xl font-bold mb-6">서비스2</h2>
      <p className="text-lg text-muted-foreground mb-8">
        <span className="text-primary">이즐리</span>는 다양한 서비스로 영상
        기획을 돕습니다.
      </p>
      <div className="relative mb-20 w-full max-w-6xl mx-auto aspect-video">
        <video
          className="w-full h-auto rounded-lg"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <h2 className="text-3xl font-bold mb-6">서비스1</h2>
      <p className="text-lg text-muted-foreground mb-8">
        <span className="text-primary">이즐리</span>는 다양한 서비스로 영상
        기획을 돕습니다.
      </p>
      <div className="relative w-full max-w-6xl mx-auto aspect-video">
        <video
          className="w-full h-auto rounded-lg"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
