import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <header className="sr-only">
        <h1>Euro Promotion</h1>
      </header>

      <main className="flex flex-col row-start-2 items-center sm:items-start text-center sm:text-left">
        <Image 
          src="/logo_cropped.png"
          width={300}
          height={75}
          alt="EuroPromotion logo"
          priority
        />

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-4 sr-only">Naše služby</h2>
          <ul className="space-y-2">
            <li className="font-semibold">Zde najdete kompletní nabídku našich služeb.</li>
            <li>Pracujeme na tom</li>
          </ul>
        </section>

        <address className="not-italic mt-8 space-y-2 text-sm">
          <div>
            <a href="mailto:office@europromotion.cz" className="underline">office@europromotion.cz</a>
          </div>
          <div>
            <a href="tel:+420605796588" className="underline">+420 605 796 588</a>
          </div>
          <div>Jaurisova 515/4, 140 00 Praha 4</div>
        </address>

        <div className="mt-6 text-xs">2025 EuroPromotion</div>
      </main>

      <footer />
    </div>
  );
}
