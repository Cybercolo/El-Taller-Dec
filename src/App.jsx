import { useEffect, useMemo, useState } from 'react'
import AboutSection from './components/AboutSection'
import CartDrawer from './components/CartDrawer'
import CheckoutSection from './components/CheckoutSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProductsSection from './components/ProductsSection'
import ServicesSection from './components/ServicesSection'
import { products } from './data/products'

const CART_KEY = 'el-taller-dec-cart'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem(CART_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const decreaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const total = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [cartItems],
  )
  const cartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems])

  return (
    <div className="min-h-screen bg-cream">
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection products={products} onAdd={addToCart} />
        <ServicesSection />
        <CheckoutSection
          total={total}
          hasItems={cartItems.length > 0}
          onSuccessfulPayment={() => setCartItems([])}
        />
      </main>
      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        total={total}
        onClose={() => setCartOpen(false)}
        onAdd={addToCart}
        onDecrease={decreaseQuantity}
        onRemove={removeItem}
        onGoCheckout={() => {
          setCartOpen(false)
          document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />
    </div>
  )
}

export default App
