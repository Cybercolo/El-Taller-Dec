import { formatCLP } from '../data/products'

function ProductCard({ product, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft transition hover:-translate-y-1">
      <div className={`h-44 bg-gradient-to-br ${product.color} p-4`}>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-navy">
          Imagen producto
        </span>
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-serif text-2xl text-navy">{product.name}</h3>
        <p className="text-sm text-ink/80">{formatCLP(product.price)}</p>
        <button
          onClick={() => onAdd(product)}
          className="w-full rounded-full border border-navy/30 px-4 py-2 text-sm font-medium text-navy transition group-hover:bg-navy group-hover:text-white"
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default ProductCard
