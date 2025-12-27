import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'A apostila é indicada para iniciantes no crochê?',
    answer: 'Sim! A apostila foi desenvolvida pensando tanto em iniciantes quanto em quem já tem experiência. Cada receita vem com passo a passo ilustrado e explicações detalhadas, facilitando o aprendizado desde o básico até modelos mais elaborados.'
  },
  {
    question: 'Quantos modelos de pantufas e sapatinhos estão incluídos?',
    answer: 'A apostila foca em amigurumis de plantas e elementos da floresta, com mais de 100 modelos exclusivos. São diversas opções de cactos, suculentas, flores, cogumelos e outros elementos decorativos que você pode criar.'
  },
  {
    question: 'Existe algum suporte para tirar dúvidas?',
    answer: 'Sim! Você terá acesso a suporte dedicado para tirar suas dúvidas sobre as receitas e técnicas. Nossa equipe está pronta para ajudar você em cada etapa do seu aprendizado.'
  },
  {
    question: 'É seguro comprar neste site?',
    answer: 'Absolutamente! Utilizamos o Mercado Pago, uma plataforma de pagamento segura e certificada, com proteção de dados e criptografia. Além disso, oferecemos garantia de 7 dias para você experimentar sem riscos.'
  },
  {
    question: 'O acesso é vitalício?',
    answer: 'Sim! Após a compra, você recebe acesso vitalício à apostila. Pode baixar, salvar e consultar quantas vezes quiser, sem prazo de validade ou taxas adicionais.'
  },
  {
    question: 'Por que custa tão pouco? Isso é real?',
    answer: 'Sim, é real! Nosso objetivo é tornar o conhecimento acessível para o maior número de pessoas. Por ser um produto digital, não temos custos de impressão ou envio, o que nos permite oferecer um preço justo e acessível para todas as artesãs.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
