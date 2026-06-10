export default function HeroPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50">

      {/* Background Images */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6 opacity-30">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="hero"
            className="h-60 w-full rounded-xl object-cover"
          />
        ))}

      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">

        <h1 className="text-4xl font-bold tracking-tight text-neutral-800 md:text-6xl">
          State of the art, cutting edge images, everywhere.
        </h1>

        <p className="max-w-md text-neutral-600">
          Move your mouse to see the parallax effect. Images at different depths
          move at different speeds.
        </p>

      </div>

    </div>
  );
}

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];