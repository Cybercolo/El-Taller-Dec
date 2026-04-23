import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

function ProductsSection({ products, onAdd }) {
  return (
    <section id="productos" className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-4xl text-navy md:text-5xl">Productos</h2>
          <p className="mt-3 text-ink/80">Coleccion seleccionada de 18 piezas decorativas.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.02 }}
          >
            <ProductCard product={product} onAdd={onAdd} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProductsSection
