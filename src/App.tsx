import MainLayouts from "./pages/MainLayouts/MainLayouts"
import ProtectedRoute from "./pages/MainLayouts/ProtectedRoute"

function App() {

  return (
    <>
      <ProtectedRoute>
        <MainLayouts />
      </ProtectedRoute>

    </>
  )
}

export default App
