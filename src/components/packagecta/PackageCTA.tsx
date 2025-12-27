export default function PackageCTA() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="#offer-section"
            onClick={scrollToOffer}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span className="text-2xl">✅</span>
            QUERO MINHAS PLANTAS AMIGURUMI AGORA!
          </a>

          <p className="text-sm text-gray-500 mt-6">
            🔒 Pagamento 100% seguro • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
