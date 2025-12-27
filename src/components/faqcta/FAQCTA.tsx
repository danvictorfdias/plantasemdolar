import { trackAndRedirect } from '../../services/clickTracking';

export default function FAQCTA() {
  const handlePurchase = () => {
    const url = trackAndRedirect(
      'https://pay.hotmart.com/P103510388G?checkoutMode=10&bid=1766800071532',
      'faq-cta'
    );
    window.location.href = url;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Garanta agora sua apostila com +100 receitas por apenas $9,90!
          </h2>

          <button
            onClick={handlePurchase}
            className="checkout bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span className="text-2xl">✅</span>
            QUERO GARANTIR AGORA!
          </button>

          <p className="text-sm text-gray-500 mt-6">
            🔒 Pagamento 100% seguro • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
