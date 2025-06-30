'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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


                    <Select value={operation} onValueChange={setOperation} required>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione a operação" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem key={1} value={'Somar'}>{'Somar'}</SelectItem>
                        <SelectItem key={2} value={'Subtrair'}>{'Subtrair'}</SelectItem>
                        <SelectItem key={3} value={'Multiplicar'}>{'Multiplicar'}</SelectItem>
                    </SelectContent>
                    </Select>

                    <Input type="number" placeholder="Segundo número" value={number2} onChange={(e) => setNumber2(e.target.value)} required />
                    <Button>Realizar Operação</Button>
                </form>
            </div>
        </>
    )
}