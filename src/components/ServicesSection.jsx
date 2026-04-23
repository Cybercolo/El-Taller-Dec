import { FiHome, FiPackage, FiPenTool } from 'react-icons/fi'

const services = [
  {
    title: 'Fundas para muebles',
    description: 'Confeccion personalizada para sofas, sillones y cojines con terminaciones premium.',
    icon: FiHome,
  },
  {
    title: 'Productos a pedido',
    description: 'Disenos unicos segun medidas, paleta de color y estilo de tu espacio.',
    icon: FiPackage,
  },
  {
    title: 'Asesoria en diseno de espacios',
    description: 'Acompanamiento para armonizar textiles, mobiliario y distribucion decorativa.',
    icon: FiPenTool,
  },
]

function ServicesSection() {
  return (
    <section id="servicios" className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
      <h2 className="mb-8 font-serif text-4xl text-navy md:text-5xl">Servicios</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <article key={service.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-soft">
              <Icon className="mb-4 text-2xl text-navy" />
              <h3 className="mb-2 font-serif text-2xl text-navy">{service.title}</h3>
              <p className="text-sm leading-relaxed text-ink/80">{service.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
