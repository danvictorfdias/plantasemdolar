import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 31,
    seconds: 32
  });

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('timerMounted'));

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 31, seconds: 32 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              <span className="text-yellow-500 text-3xl">⭐</span> Apostila Digital Completa (PDF) com mais de 100 receitas exclusivas.
            </h2>

            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-400">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-gray-500 text-sm mt-2">Minutos</div>
              </div>
              <div className="text-5xl text-gray-400">:</div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-gray-500 text-sm mt-2">Segundos</div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Oferta Incrível por <span className="text-green-600">tempo limitado!</span>
            </h3>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 inline-block mb-8">
              <p className="text-lg text-gray-800">
                <span className="text-2xl">⏳</span> Atenção: apenas <strong className="text-green-600">50 vagas</strong> disponíveis com esse desconto e bônus.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-full h-12 relative overflow-hidden shadow-lg max-w-2xl mx-auto">
              <div className="bg-green-800 h-full rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Vagas preenchidas: 95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
