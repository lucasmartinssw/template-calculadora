'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useState } from "react"

export default function PaginaCalculadora() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [operation, setOperation] = useState('')
    return (
        <>
            <div className="h-screen flex flex-col align-center items-center justify-center " >
                <h1 className="text 3xl"> Página da Calculadora</h1>
                <form action=" " className="flex flex-col gap-4 w-full max-w-xs">
                    <Input type="number" placeholder="Primeiro número" value={number1} onChange={(e) => setNumber1(e.target.value)} required />


                    <Select value={operation} onValueChange={(e) => setOperation(e)} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Operação" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="soma">+</SelectItem>
                            <SelectItem value="subtracao">-</SelectItem>
                            <SelectItem value="multiplicacao">X</SelectItem>
                            <SelectItem key=[3] value="divisao">/</SelectItem>
                        </SelectContent>
                    </Select>

                    <Input type="number" placeholder="Segundo número" value={number2} onChange={(e) => setNumber2(e.target.value)} required />
                    <Button>Realizar Operação</Button>
                </form>
            </div>
        </>
    )
}