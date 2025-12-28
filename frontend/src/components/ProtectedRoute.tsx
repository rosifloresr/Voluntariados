import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store' //sin desarrollar aun

interface Props {
  children: JSX.Element
  admin?: boolean
}

export default function ProtectedRoute({ children, admin }: Props) {
  const { token, role } = useAuthStore()

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (admin && role !== 'ADMIN') {
    return <Navigate to="/" replace />
  }

  return children
}
