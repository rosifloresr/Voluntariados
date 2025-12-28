import {Outlet} from 'react-router-dom'

export default function AdminLayout(){
    return (
        <div className="min-h-screen flex bg-gray-100">
            <aside className="w-64 bg-white border-r p-4">
                <p className="font-semibold mb-4">Admin</p>
                <nav className="flex flex-col gap-2 text-sm">
                    <a href="/admin">Dashboard</a>
                    <a href="/admin/voluntariados">Voluntariados</a>
                    <a href="/admin/postulaciones">Postulaciones</a>
                </nav>
            </aside>
        </div>
    )
}