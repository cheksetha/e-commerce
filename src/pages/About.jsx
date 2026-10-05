function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto w-full p-4">
        {/* 
          The 'aspect-video' class automatically maintains a perfect 16:9 
          aspect ratio for the iframe, preventing distortion on any screen size. 
        */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            // FIXED: Replaced initial '&' with '?' before list parameter
            src="https://www.youtube.com/embed/6VLEkBfUFtE?list=RD6VLEkBfUFtE&start_radio=1" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default About;