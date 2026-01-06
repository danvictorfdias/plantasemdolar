import { useRef, useEffect, useState, memo } from 'react';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const CHECKOUT_URL = 'https://pay.hotmart.com/P103510388G?checkoutMode=10&bid=1766800071532';

function Offer() {
  const offerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(progressRef, { threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <section id="offer-section" ref={offerRef} className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>

            <div className="text-center mb-6">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-2 rounded-full mb-4 animate-pulse">
                🔥 OFERTA LIMITADA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-green-600 mb-2">
                Somente hoje
              </h2>
            </div>

            <div className="mb-8">
              <div className="relative w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.postimg.cc/rpLTb4hx/Capas-4-2-1-736x1024.webp"
                  alt="Apostila Amigurumi Plantas & Floresta"
                  loading="lazy"
                  className="w-full h-auto"
                  width="280"
                  height="389"
                />
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg text-gray-500 line-through font-medium">
                  De $19,90
                </span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  por apenas
                </span>
              </div>

              <div className="mb-3">
                <span className="text-7xl sm:text-8xl font-black text-green-600 tracking-tight leading-none block">
                  $9,90
                </span>
              </div>

              <p className="text-gray-700 text-lg font-semibold">
                Valor em <span className="text-green-600 font-bold">dólar</span>, clique no botão abaixo para ver o valor na sua moeda local
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-200">
              <p className="text-center text-sm font-bold text-green-800 mb-4">
                Receitas exclusivas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    Mais de 100 receitas de Plantas e Flores decorativas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    Passo a passo Em português
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    Pagamento Único Acesso Vitalício
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    Atualizações Semanais
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-semibold text-base leading-relaxed">
                    Mini-eBook Alimentos e Frutas Amigurumi
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-4">
                <p className="text-center text-base font-bold text-amber-900">
                  ⚠️ Vagas limitadas para garantir um acompanhamento personalizado
                </p>
              </div>
            </div>

            <a
              href={CHECKOUT_URL}
              className="checkout w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
            >
              <span className="text-2xl">✅</span>
              QUERO MINHAS PLANTAS AMIGURUMI AGORA!
            </a>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-8 opacity-80" loading="lazy" width="32" height="32" />
                <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Mastercard" className="h-8 opacity-80" loading="lazy" width="32" height="32" />
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Elo" className="h-8 opacity-80" loading="lazy" width="32" height="32" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard Cartões" className="h-8 opacity-80" loading="lazy" width="32" height="32" />
                <img src="https://i.postimg.cc/fTCRCg1b/2560px-Logo-pix-powered-by-Banco-Central-Brazil-2020-svg-1.png" alt="Pix" className="h-8 opacity-80" loading="lazy" width="32" height="32" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Boleto" className="h-8 opacity-80" loading="lazy" width="32" height="32" />
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 font-medium">
              🔒 Pagamento 100% seguro • Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Offer);
