import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import router from './router'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
)