import { useState } from 'react'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Hello World!
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Test button</Button>
      </div>
    </>
  )
}

export default App
