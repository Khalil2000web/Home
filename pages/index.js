import CustomVideo from "../components/CustomVideo";

export default function HomePage({ media }) {
  return (
    <div className="homepage_gallery">
      {media.map((item, i) =>
        item.type === "video" ? (
          <div key={i} style={{ marginBottom: "80px" }}>
            <CustomVideo
              src={item.src}
              muteIcon={item.muteIcon}
              unmuteIcon={item.unmuteIcon}
              videoLink={item.videoLink}
            />
          </div>
        ) : (
          <img
            key={i}
            src={item.src}
            alt="Home-Page Image"
            decoding="async"
            loading={i < 2 ? "eager" : "lazy"}
            className="image"
          />
        )
      )}
    </div>
  );
}

export async function getStaticProps() {
  const media = [
    {
      type: "video",
      src: "https://ik.imagekit.io/cx6yav04a/91AAD0-2855-41E9-AFBC-BF7F0B030D1B-2.mp4",
      muteIcon: "/icons/icon-mute.svg",
      unmuteIcon: "/icons/icon-volume.svg",
      videoLink: "https://tour.khaliil.com/"
    },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2879.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2908.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2909.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2915.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2934.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2937.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2938.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2944.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2945.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2946.jpeg" },
    { type: "image", src: "https://pub-366eeae0aa1144bca9919dfa09bb15f7.r2.dev/IMG_2953.jpeg" }
  ];

  return { props: { media } };
}