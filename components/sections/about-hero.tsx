import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">About Me</h1>
            <p className="text-lg text-muted-foreground mb-6">
              I'm Wasim Rahii, a passionate Senior MERN Stack Developer with extensive experience in building modern web
              applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              With a strong foundation in JavaScript and its ecosystem, I specialize in creating scalable, efficient,
              and maintainable applications using MongoDB, Express.js, React, and Node.js.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/wasim-profile.png"
                alt="Wasim Rahii - MERN Stack Developer"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
