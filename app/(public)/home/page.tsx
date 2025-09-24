import { SiteHeader } from "../../_components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <SiteHeader />
      <main className="pt-24 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Home Page</h1>
      </main>
    </div>
  );
}
