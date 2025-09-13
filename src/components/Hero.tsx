import heroImage from "@/assets/hero-brain-imaging.avif"; // make sure you converted this to .webp

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 pt-24 md:pt-32 scroll-mt-24 md:scroll-mt-32"
    >
      {/* Background Hero Image */}
      <img
        src={heroImage}
        alt="MRI brain visualization background"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />

      {/* Animated overlay (desktop only for performance) */}
      <div className="absolute inset-0 hidden md:block opacity-20">
        <div className="w-full h-full bg-gradient-neural animate-pulse motion-reduce:animate-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 text-white drop-shadow-xl">
            Intelligent Medical Imaging (IMAGINE) Research Lab
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            IMAGINE develops advanced medical imaging and analysis techniques, focusing on
            enhancing MRI with artificial intelligence. Their main area of work is brain and
            body imaging, especially fetal brain MRI, which is challenging due to unpredictable
            fetal and maternal movements. They create tools for analyzing brain development
            before and shortly after birth to better understand early brain structure, function,
            and neurodevelopment, particularly in cases affected by congenital or perinatal
            conditions.
          </p>

          {/* Recruitment message */}
          <div className="mt-10">
            <p className="text-3xl md:text-4xl font-bold italic text-white drop-shadow-lg">
              We are actively looking for motivated PhD and Postdoc researchers!
            </p>
          </div>

          {/* Stats placeholder (optional, can be removed or filled) */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2"></div>
              <div className="text-sm text-muted-foreground"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2"></div>
              <div className="text-sm text-muted-foreground"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2"></div>
              <div className="text-sm text-muted-foreground"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
