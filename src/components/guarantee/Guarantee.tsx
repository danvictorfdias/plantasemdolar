import { Shield } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gray-200">
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="https://i.postimg.cc/1zZSTFWj/selo-de-garantia-7-dias-1.webp"
                  alt="Garantia 7 dias"
                  loading="lazy"
                  width="500"
                  height="500"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain mx-auto"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Garantia de 100% de Satisfação ou Reembolso Total!
                </h2>

                <p className="text-xl text-gray-700 leading-relaxed">
                  Teste por <strong className="text-green-600">7 dias</strong>: se não gostar, seu dinheiro de volta.
                </p>

                <p className="text-xl text-gray-700 font-semibold">
                  Simples, rápido e sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
