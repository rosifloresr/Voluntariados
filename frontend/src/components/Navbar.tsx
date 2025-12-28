import { Link } from 'react-router-dom'
//import sin desarrollo 
import { useAuthStore } from '../store/auth.store'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const { token, logout } = useAuthStore()

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-emerald-700">
          Voluntariados
        </Link>

        <nav className="flex gap-4 items-center">
          <Link to="/voluntariados">Voluntariados</Link>

          {token ? (
            <Button variant="outline" onClick={logout}>
              Salir
            </Button>
          ) : (
            <Link to="/login">
              <Button>Ingresar</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
