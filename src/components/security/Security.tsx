import { Monitor, Lock, Mail } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-12 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Monitor className="w-16 h-16 text-pink-500" />
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                A plataforma de pagamento é{' '}
                <strong className="text-gray-900">certificada e aprovada.</strong>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Lock className="w-16 h-16 text-pink-500" />
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                Seus dados financeiros permanecerão{' '}
                <strong className="text-gray-900">totalmente secretos e protegidos.</strong>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-16 h-16 text-pink-500" />
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                Seu acesso será <strong className="text-gray-900">entregue no por Email e Whatspp.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
