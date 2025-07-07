import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col align-center items-center justify-center ">
        <div className="flex flex-col align-center items-center justify-center h-screen max-w-3xl gap-9" >
          <h1 className="text-4xl font-bold">Bem vindo à Calculadora RPV</h1>
          <h2 className="text-xl font-bold">Projeto base Next.Js + Tailwind + shadcn + Integração Backend</h2>
          <p className="leading-relaxed-text-lg text-center"> Este projeto foi criado para demonstrar uma calculadora de operações matemáticas integrando frontend moderno com backend externo, utilizando as melhores práticas do ecossistema React/Next.Js</p>
          <Button href="/calculadora">Ir para a calculadora</Button>
        </div>
      </div>
    </>
  )
}