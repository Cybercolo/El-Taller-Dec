import { FiShoppingBag } from 'react-icons/fi'

function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#inicio" className="font-serif text-2xl text-navy md:text-3xl">
          El Taller Dec
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#sobre-mi" className="transition hover:text-navy">Sobre mi</a>
          <a href="#productos" className="transition hover:text-navy">Productos</a>
          <a href="#servicios" className="transition hover:text-navy">Servicios</a>
          <a href="#checkout" className="transition hover:text-navy">Checkout</a>
        </div>
        <button
          onClick={onOpenCart}
          className="flex items-center gap-2 rounded-full border border-navy/30 px-4 py-2 text-sm transition hover:bg-navy hover:text-white"
        >
          <FiShoppingBag />
          Carrito ({cartCount})
        </button>
      </nav>
    </header>
  )
}

export default Navbar
