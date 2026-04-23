import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:px-8">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-72 rounded-3xl bg-gradient-to-br from-[#f4e6e0] via-[#e8ddf3] to-[#d8d6ec] shadow-soft md:h-96"
      >
        <div className="flex h-full items-end p-8">
          <span className="rounded-full bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-navy">
            Foto de Carla
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <h2 className="font-serif text-4xl text-navy md:text-5xl">Sobre mi</h2>
        <p className="leading-relaxed text-ink/80">
          Soy Carla Perez-Yarza, dibujante proyectista y apasionada por la decoracion de interiores. Combino mi mirada
          tecnica con sensibilidad artesanal para crear piezas textiles que transforman espacios cotidianos.
        </p>
        <p className="leading-relaxed text-ink/80">
          En El Taller Dec diseno y confecciono cojines, fundas para sofas y otros productos decorativos hechos a mano,
          cuidando cada costura para lograr armonia visual, durabilidad y estilo minimalista.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection
