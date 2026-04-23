import { useState } from 'react'
import { formatCLP } from '../data/products'

const initialForm = { nombre: '', email: '', direccion: '' }

function CheckoutSection({ total, hasItems, onSuccessfulPayment }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!hasItems) {
      setStatus('Agrega productos al carrito para continuar.')
      return
    }
    if (!form.nombre || !form.email || !form.direccion) {
      setStatus('Completa todos los campos del formulario.')
      return
    }
    setStatus('Pago simulado exitoso. Te enviaremos confirmacion por correo.')
    onSuccessfulPayment()
    setForm(initialForm)
  }

  return (
    <section id="checkout" className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8">
      <div className="grid gap-8 rounded-3xl bg-white p-6 shadow-soft md:grid-cols-2 md:p-10">
        <div className="space-y-3">
          <h2 className="font-serif text-4xl text-navy md:text-5xl">Pasarela de pago</h2>
          <p className="text-sm leading-relaxed text-ink/80">
            Integracion mock para Stripe/Webpay. Puedes reemplazar esta accion por una API real sin cambiar la interfaz.
          </p>
          <div className="rounded-2xl bg-cream p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Total a pagar</p>
            <p className="mt-1 text-2xl font-semibold text-navy">{formatCLP(total)}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre completo"
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none ring-navy/20 focus:ring"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo electronico"
            type="email"
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none ring-navy/20 focus:ring"
          />
          <input
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            placeholder="Direccion de envio"
            className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none ring-navy/20 focus:ring"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-navy px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Pagar ahora
          </button>
          {status && <p className="text-sm text-navy">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default CheckoutSection
