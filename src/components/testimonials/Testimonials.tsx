import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Maria das Dores',
    image: 'https://i.postimg.cc/6QNKSZHH/Depoimentos-Chaveiros-1-790x1024.webp',
    text: 'Os modelos são encantadores e as explicações super fáceis de seguir. Já criei um cenário maravilhoso na minha varanda!',
    rating: 5
  },
  {
    name: 'Juliana Braga',
    image: 'https://i.postimg.cc/3wHh6GLf/Depoimentos-Chaveiros-790x1024.webp',
    text: 'Comprei a apostila e comecei a fazer essa florzinha no mesmo dia! Em menos de uma semana já vendi mais de 10 peças pelo Instagram. Todo o material é prático, e o suporte foi incrível.',
    rating: 5
  }
];

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<number>(0);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);

  useEffect(() => {
    const handleTimerMounted = () => {
      setTimerStarted(true);
    };

    window.addEventListener('timerMounted', handleTimerMounted);

    return () => {
      window.removeEventListener('timerMounted', handleTimerMounted);
    };
  }, []);

  useEffect(() => {
    if (!timerStarted) return;

    const timers: NodeJS.Timeout[] = [];

    testimonials.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleCards(prev => prev + 1);
      }, index * 15000);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [timerStarted]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossas alunas dizem:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 items-center justify-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                index < visibleCards ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
              style={{ display: index < visibleCards ? 'block' : 'none' }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                width="790"
                height="1024"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg">
            +3.500 alunas já estão criando suas plantinhas
          </div>
        </div>
      </div>
    </section>
  );
}
