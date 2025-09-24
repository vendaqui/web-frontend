import { SiteHeader } from "../../_components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <SiteHeader />
      <main className="pt-24 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Em Desenvolvimento</h1>
      </main>
      <p className="text-center text-gray-400 mt-4">Esta página está em construção. Volte em breve!</p>
      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Vendaqui. Todos os direitos reservados.
      </footer>
    </div>
  );
}
