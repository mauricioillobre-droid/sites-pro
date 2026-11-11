import { useEffect } from "react";
import { iniciarScrollSuave } from "@/lib/movimiento";
import { contenido } from "@/contenido";

// Cada sección de la web vive en src/secciones/ y se suma acá, en orden.
export default function App() {
  useEffect(() => iniciarScrollSuave(), []);

  return (
    <main>
      <section className="grid min-h-svh place-items-center px-6">
        <h1 className="titulo text-4xl">{contenido.negocio.nombre}</h1>
      </section>
    </main>
  );
}
