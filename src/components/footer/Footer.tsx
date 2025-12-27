import { Shield, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Apostila Digital Amigurumi Plantas & Floresta
          </h3>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-600" />
              <span>Dados Protegidos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Garantia de 7 Dias</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 mb-2">
              © 2025 Apostila Amigurumi Plantas & Floresta. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-400">
              Este produto é comercializado com garantia através da plataforma segura de pagamentos Mercado Pago.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
