import { Activity } from "lucide-react"

export function Logo() {
  return (
    <div className="flex flex-col items-center mb-6 animate-fade-in">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-green-500 to-teal-500 shadow-lg p-4 mb-2">
        <Activity className="h-12 w-12 text-white" strokeWidth={2.5} />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
        Saúde em Números
      </h1>
      <p className="text-sm text-muted-foreground">Calculadora de IMC</p>
    </div>
  )
}
