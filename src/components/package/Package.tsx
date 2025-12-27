import { Check } from 'lucide-react';

export default function Package() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            O que está Incluso no pacote
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/rpLTb4hx/Capas-4-2-1-736x1024.webp"
                alt="Conteúdo da apostila"
                loading="lazy"
                width="736"
                height="1024"
                className="w-full max-w-lg rounded-xl shadow-2xl"
              />
            </div>

            <div>
              <ul className="space-y-8">
                <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg font-medium">+100 receitas exclusivas ilustradas</span>
                </li>
                <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg font-medium">Lista completa de materiais</span>
                </li>
                <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg font-medium">Acesso vitalício ao conteúdo</span>
                </li>
                <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 text-lg font-medium">Passo a passo com fotos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
