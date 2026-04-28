import { useState } from 'react'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <div className="text-6xl font-bold">
          Hello World.
        </div>
        <Button>Test button</Button>
      </div>
    </>
  )
}

export default App
