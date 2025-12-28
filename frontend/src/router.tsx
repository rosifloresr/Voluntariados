import {createBrowserRouter } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import Login './pages/Login'
import Voluntariados from './pages/Voluntariados'
import DashBoard from './pages/admin/DashBoard'

const router = createBrowserRouter([{
    element: <PublicLayout/>,
    children: [
        {path: '/', element: <Home/>},
        {path: '/login', element: <Login/>},
        {path: '/voluntariados', element: <Voluntariados/>}
    ]
},
{
    path: '/admin',
    element: (
        <ProtectedRoute admin>
            <AdminLayout/>
        </ProtectedRoute>
    ),
    children: [
        { path: '', element: <DashBoard/>}
    ]
}
])
export default router