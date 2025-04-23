"use client"

import { useState } from "react"
import { Calculator, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Logo } from "@/components/logo"

export default function ImcCalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState("")
  const [error, setError] = useState("")

  const calculateBMI = () => {
    setError("")

    const heightValue = Number.parseFloat(height.replace(",", "."))
    const weightValue = Number.parseFloat(weight.replace(",", "."))

    if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
      setError("Por favor, insira valores válidos para altura e peso.")
      return
    }

    // Converter altura de cm para metros se necessário
    const heightInMeters = heightValue > 3 ? heightValue / 100 : heightValue

    const bmiValue = weightValue / (heightInMeters * heightInMeters)
    setBmi(Number.parseFloat(bmiValue.toFixed(2)))

    // Determinar categoria
    if (bmiValue < 18.5) {
      setCategory("Abaixo do peso")
    } else if (bmiValue < 25) {
      setCategory("Peso normal")
    } else if (bmiValue < 30) {
      setCategory("Sobrepeso")
    } else if (bmiValue < 35) {
      setCategory("Obesidade Grau I")
    } else if (bmiValue < 40) {
      setCategory("Obesidade Grau II")
    } else {
      setCategory("Obesidade Grau III")
    }
  }

  const resetForm = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setCategory("")
    setError("")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 p-4">
      <Logo />
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              <CardTitle>Calculadora de IMC</CardTitle>
            </div>
            <CardDescription className="text-green-100">Calcule seu Índice de Massa Corporal</CardDescription>
          </CardHeader>
          <Tabs defaultValue="calculator">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calculator">Calculadora</TabsTrigger>
              <TabsTrigger value="info">Informações</TabsTrigger>
            </TabsList>
            <TabsContent value="calculator">
              <CardContent className="pt-6">
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Altura (metros)</Label>
                    <Input
                      id="height"
                      type="text"
                      placeholder="Ex: 1.75 ou 175"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Insira em metros (ex: 1.75) ou centímetros (ex: 175)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input
                      id="weight"
                      type="text"
                      placeholder="Ex: 70.5"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </form>
                {bmi !== null && (
                  <div className="mt-6 rounded-lg bg-green-50 p-4">
                    <h3 className="text-lg font-semibold text-green-800">Resultado:</h3>
                    <p className="text-md mt-2">
                      Seu IMC é <span className="font-bold text-green-700">{bmi}</span>
                    </p>
                    <p className="text-md mt-1">
                      Categoria: <span className="font-bold text-green-700">{category}</span>
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={resetForm}>
                  Limpar
                </Button>
                <Button onClick={calculateBMI}>Calcular</Button>
              </CardFooter>
            </TabsContent>
            <TabsContent value="info">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">O que é IMC?</h3>
                    <p className="text-sm text-muted-foreground">
                      O Índice de Massa Corporal (IMC) é uma medida que relaciona o peso e a altura para avaliar se uma
                      pessoa está com peso adequado.
                    </p>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <h3 className="font-medium mb-2">Categorias de IMC:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Abaixo do peso</span>
                      <span className="font-medium">Menor que 18.5</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Peso normal</span>
                      <span className="font-medium">18.5 - 24.9</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sobrepeso</span>
                      <span className="font-medium">25 - 29.9</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Obesidade Grau I</span>
                      <span className="font-medium">30 - 34.9</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Obesidade Grau II</span>
                      <span className="font-medium">35 - 39.9</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Obesidade Grau III</span>
                      <span className="font-medium">Maior que 40</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-muted-foreground">
                  Nota: O IMC é apenas uma medida de referência e não considera outros fatores importantes como
                  composição corporal, distribuição de gordura e condições médicas específicas. Consulte sempre um
                  profissional de saúde para uma avaliação completa.
                </p>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
