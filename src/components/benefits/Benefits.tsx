import { memo } from 'react';
import { Sparkles, Clock, TrendingUp, BookOpen, Heart, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Mais de 100 Moldes Exclusivos',
    description: 'Coleção completa de amigurumis temáticos de plantas e floresta com instruções detalhadas',
    image: 'https://i.postimg.cc/qvK0jwG6/amigurumi-perfeito-504015105_18054338360593173_3190097520732841079_n-300x300.webp'
  },
  {
    icon: Clock,
    title: 'Acesso Imediato e Vitalício',
    description: 'Receba tudo no seu e-mail em segundos e tenha acesso para sempre, sem mensalidades',
    image: 'https://i.postimg.cc/hGqnwmC8/d05a8c76-5375-49de-8639-9a6c0b72464b-1-300x300.webp'
  },
  {
    icon: Sparkles,
    title: 'Passo a Passo Ilustrado',
    description: 'Cada molde vem com fotos e explicações claras, perfeito para iniciantes e avançadas',
    image: 'https://i.postimg.cc/rpLTb4hn/df2ad2fb-4c8e-4e58-a35b-336f4f72791e-300x300.webp'
  },
  {
    icon: DollarSign,
    title: 'Gere Renda Extra',
    description: 'Venda suas peças prontas ou aceite encomendas personalizadas e lucre com seu talento',
    image: 'https://i.postimg.cc/htmgps08/c66e2a9e-fb50-435d-b8e4-c30f6466b748-300x300.webp'
  },
  {
    icon: TrendingUp,
    title: 'Tendência em Alta',
    description: 'Amigurumis de plantas são sucesso nas redes sociais e vendem muito bem online',
    image: 'https://i.postimg.cc/9Q9VJbBC/2-5-1024x1024.webp'
  },
  {
    icon: Heart,
    title: 'Suporte e Comunidade',
    description: 'Entre para grupo exclusivo de artesãs e receba dicas, inspirações e ajuda sempre que precisar',
    image: 'https://i.postimg.cc/3xG7n1Zh/4-8-1024x1024.webp'
  }
];

function Benefits() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que a “Apostila Amigurumi Plantas & Floresta” <span className="text-rose-600">é tudo que você precisa?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para dominar a arte do amigurumi e transformar seu hobby em negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    loading="lazy"
                    width="300"
                    height="300"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Benefits);
