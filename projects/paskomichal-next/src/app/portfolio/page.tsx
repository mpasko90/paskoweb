export const metadata = {
  title: "Portfolio | Michał Paśko - Web Developer Wrocław",
  description: "Zobacz moje najlepsze realizacje stron internetowych, aplikacji webowych i projektów e-commerce.",
};

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Portfolio</h1>
      <p className="text-lg mb-8 max-w-3xl text-muted-foreground">
        Poniżej przedstawiam wybrane projekty, które miałem przyjemność realizować.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Projekty będą dodane w kolejnym kroku */}
        <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
          <div className="aspect-video w-full bg-muted/20 object-cover transition-transform group-hover:scale-105"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Przykładowy Projekt 1</h2>
            <p className="text-muted-foreground">Opis projektu będzie tutaj</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
          <div className="aspect-video w-full bg-muted/20 object-cover transition-transform group-hover:scale-105"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Przykładowy Projekt 2</h2>
            <p className="text-muted-foreground">Opis projektu będzie tutaj</p>
          </div>
        </div>
      </div>
    </main>
  );
}
