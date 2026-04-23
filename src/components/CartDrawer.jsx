import { FiMinus, FiPlus, FiTrash2, FiX } from 'react-icons/fi'
import { formatCLP } from '../data/products'

function CartDrawer({ open, items, total, onClose, onAdd, onDecrease, onRemove, onGoCheckout }) {
  return (
    <>
      {open && <button onClick={onClose} className="fixed inset-0 z-40 bg-black/30" aria-label="Cerrar carrito" />}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white p-6 shadow-soft transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-3xl text-navy">Carrito</h3>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-black/5" aria-label="Cerrar">
            <FiX />
          </button>
        </div>
        <div className="space-y-4 overflow-y-auto pb-48">
          {items.length === 0 ? (
            <p className="text-sm text-ink/70">Tu carrito esta vacio.</p>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="rounded-2xl border border-black/5 p-4">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <p className="font-medium text-navy">{product.name}</p>
                    <p className="text-sm text-ink/70">{formatCLP(product.price)}</p>
                  </div>
                  <button onClick={() => onRemove(product.id)} className="rounded-full p-1 hover:bg-black/5">
                    <FiTrash2 />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onDecrease(product.id)} className="rounded-full border p-2">
                    <FiMinus />
                  </button>
                  <span className="w-8 text-center text-sm">{quantity}</span>
                  <button onClick={() => onAdd(product)} className="rounded-full border p-2">
                    <FiPlus />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full border-t border-black/10 bg-white p-6">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span>Total</span>
            <strong className="text-navy">{formatCLP(total)}</strong>
          </div>
          <button
            onClick={onGoCheckout}
            disabled={!items.length}
            className="w-full rounded-full bg-navy px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-navy/40"
          >
            Ir a checkout
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
