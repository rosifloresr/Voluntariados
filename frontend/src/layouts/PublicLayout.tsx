import { Outlet } from 'react-router-dom'
import Navar from '../components/Navbar' //todavia no existe.

export default function PublicLayaout() {
    return (
        <div className="min-h-screen bg-[#f4f1ea]">
            <Navar/>
            <main className="max-w-7xl mx-auto pz-6 py-10">
                <Outlet/>
            </main>
        </div>
    )
}