import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section id="inicio" className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-navy/80">Marca personal de Carla Perez-Yarza</p>
        <h1 className="font-serif text-5xl leading-tight text-navy md:text-6xl">
          Diseno y decoracion
          <br />
          hecha a mano
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-ink/80 md:text-lg">
          Textiles y piezas decorativas para hogares que aman los espacios serenos, calidos y contemporaneos.
        </p>
        <a
          href="#productos"
          className="inline-block rounded-full bg-navy px-7 py-3 text-sm font-medium text-white transition hover:bg-black"
        >
          Ver coleccion
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="h-80 rounded-3xl bg-gradient-to-br from-[#f6ede2] via-[#efe3d2] to-[#d8c3aa] shadow-soft md:h-[480px]"
      >
        <div className="flex h-full items-end justify-start p-8">
          <p className="rounded-full bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-navy">
            Imagen principal
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
