import { FiInstagram, FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#efe3d5]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p className="flex items-center gap-2 text-ink/80">
          <FiMail />
          contacto@eltallerdec.cl
        </p>
        <p className="flex items-center gap-2 text-ink/80">
          <FiInstagram />
          @eltallerdec
        </p>
        <p className="text-ink/70">© {new Date().getFullYear()} El Taller Dec. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
