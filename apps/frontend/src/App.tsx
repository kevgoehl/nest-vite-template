import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import './index.css'

function App() {
  const [apiMessage, setApiMessage] = useState<string>('')

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((j) => setApiMessage(j.message ?? 'OK'))
      .catch(() => setApiMessage('API not reachable yet'))
  }, [])

  return (
    <div className="min-h-screen p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Nest Vite (React) Template</h1>
        <div className="space-x-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </header>
      <main className="mt-10">
        <p className="text-slate-600">Backend says: {apiMessage}</p>
      </main>
    </div>
  )
}

export default App

