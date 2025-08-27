import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Para quem é indicado o Pacote de Ferramentas para Terapeutas Holísticos?",
      answer: "Este pacote é ideal para terapeutas holísticos de diversas especialidades, como Reiki, Numerologia, Aromaterapia, Terapia com Cristais, Meditação, entre outros. Ele atende tanto terapeutas iniciantes que buscam estruturar suas sessões quanto profissionais experientes que desejam aprimorar seu trabalho com materiais práticos e visuais."
    },
    {
      question: "Como receberei o material após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um link exclusivo para acessar a área de membros. Lá, todos os materiais em formato PDF estarão organizados de maneira intuitiva, permitindo que você visualize, imprima e utilize os conteúdos em suas sessões com máxima praticidade e rapidez."
    },
    {
      question: "Os materiais são impressos ou digitais?",
      answer: "Todos os materiais são digitais e prontos para impressão, entregues em formato PDF através da área de membros. Isso permite que você personalize e imprima conforme a necessidade, usando em várias sessões ou adaptando para cada cliente."
    },
    {
      question: "Preciso ter experiência para usar este pacote?",
      answer: "Não. As ferramentas foram criadas para serem de fácil aplicação, tornando-as adequadas para terapeutas de qualquer nível de experiência. Cada material vem com instruções claras, ajudando você a utilizar de maneira intuitiva e prática."
    },
    {
      question: "Posso reutilizar os materiais com diferentes clientes?",
      answer: "Sim, as ferramentas são projetadas para serem reutilizáveis e adaptáveis para diversos clientes e sessões. Você poderá imprimir quantas cópias precisar e adaptar cada uma para atender às necessidades específicas de cada pessoa."
    },
    {
      question: "Este pacote cobre que áreas terapêuticas?",
      answer: "Este kit completo foi criado para transformar a prática de terapeutas holísticos em várias áreas essenciais, como Aromaterapia, Cristais, Florais, Reiki, Meditações, Ho'oponopono, Numerologia, Mapa Astral, Tarô, Radiestesia e Genograma Familiar. Com ferramentas práticas, fáceis de aplicar e prontas para uso, você vai elevar o nível dos seus atendimentos, encantar seus pacientes e se destacar no mercado, ganhando mais autoridade e resultados reais!"
    },
    {
      question: "Há algum suporte caso eu tenha dúvidas sobre o uso das ferramentas?",
      answer: "Sim! Nossa equipe está disponível para ajudar você a aproveitar ao máximo cada recurso do pacote. Caso tenha alguma dúvida ou queira orientações específicas, entre em contato conosco pelo e-mail de suporte que estará disponível na página de confirmação de compra."
    },
    {
      question: "E se eu não gostar do material? Há garantia?",
      answer: "Sim, oferecemos uma garantia incondicional de 14 dias. Se por qualquer motivo você não ficar satisfeito com o material, basta solicitar a devolução dentro desse prazo, e faremos o reembolso completo do seu investimento."
    },
    {
      question: "Os Stories Magnéticos, com as 10 fórmulas de stories fazem parte do kit ou é um material à parte?",
      answer: "Não, o Stories Magnéticos é um bônus exclusivo que você recebe ao garantir o Coleção Premium para Terapeutas Holísticos. Ele foi criado para ajudar você a transformar seus stories em uma verdadeira vitrine de vendas — sem parecer que está vendendo. Com 10 fórmulas prontas, você vai conseguir gerar conexão e vender mais, mesmo que tenha poucos seguidores. É um presente estratégico para você aplicar ainda hoje e aumentar seus resultados no Instagram!"
    },
    {
      question: "Como o material pode me ajudar a atrair mais clientes?",
      answer: "O Kit de Ferramentas Essenciais vai muito além de recursos para suas sessões — ele inclui conteúdos estratégicos prontos para você usar nas redes sociais, como posts, roteiros de Reels e mensagens para WhatsApp que conectam, engajam e despertam o interesse do seu público ideal. Com essas ferramentas, você vai aumentar sua autoridade, gerar mais confiança e criar um fluxo constante de novos clientes, enchendo sua agenda de forma prática e sem complicação!"
    }
  ];

  return (
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-wellness-dark">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-wellness-light rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-wellness-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;