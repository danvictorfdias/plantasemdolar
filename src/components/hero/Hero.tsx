import { memo } from 'react';
import BlackFridayBanner from './BlackFridayBanner';

function Hero() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white">
      <BlackFridayBanner />
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="mb-8">
                <img
                  src="https://i.postimg.cc/cLz9jrW9/Design.webp"
                  alt="Apostila Amigurumi Plantas & Floresta"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width="500"
                  height="500"
                  className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
                />
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-green-600 font-extrabold">Apostila Amigurumi<br />
                  Plantas & Floresta - +100<br />
                  Modelos Exclusivos</span>
              </h1>

              <p className="text-lg md:text-xl font-bold text-gray-700 mb-6 max-w-2xl mx-auto">
                Transforme sua casa em um jardim encantador com amigurumis de plantas que nunca murcham!
              </p>

              <p className="text-gray-700 mb-8 max-w-xl mx-auto font-medium">
                +100 modelos exclusivos de amigurumi com passo a passo detalhado.
              </p>

              <a
                href="#offer-section"
                onClick={scrollToOffer}
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 mb-4 max-w-full"
              >
                <span className="text-xl md:text-2xl">✅</span>
                <span className="text-center leading-tight">QUERO MINHAS PLANTAS AMIGURUMI AGORA!</span>
              </a>

              <p className="text-base text-gray-700 max-w-2xl mx-auto font-medium">
                Descubra o segredo para encher sua casa de vida, cor e sofisticação com plantas e elementos de floresta em crochê!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
