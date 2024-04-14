import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage'
import DestinationDetail from './pages/DestinationDetail'
import DestinationLayout from './layouts/DestinationLayout'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="destination" element={<DestinationLayout />}>
        <Route index element={<Navigate to="moon" />} />
        <Route path=":name" element={<DestinationDetail />} />
      </Route>
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
      <Route path="*" element={<Navigate to="." />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
