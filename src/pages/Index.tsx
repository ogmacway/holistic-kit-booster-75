import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { SplashCursor } from '@/components/ui/splash-cursor';
import CountdownTimer from '@/components/CountdownTimer';
import ToolIcon from '@/components/ToolIcon';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import { CheckCircle, Shield, Heart, ArrowDown, ChevronLeft, ChevronRight, ArrowDownCircle, Flame } from 'lucide-react';
import heroImage from '@/assets/hero-wellness-kit.jpg';
import testimonialImage from '@/assets/testimonial-therapist.jpg';
import heroFeatures from '/lovable-uploads/915517d8-3a59-4738-9c94-c53e0cf5dc6d.png';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const Index = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
    align: 'center',
    loop: true
  }, [AutoScroll({ playOnInit: true, stopOnInteraction: false })]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const testimonialImages = [
    { src: "/lovable-uploads/d2effd2c-43bf-4dd8-a10f-91bc7a068002.png", alt: "Depoimento Amanda Ribeiro" },
    { src: "/lovable-uploads/ba965e3b-fb09-4fc8-9f81-ba3467c96f41.png", alt: "Depoimento Rafael Luz" },
    { src: "/lovable-uploads/b0bc6d19-799e-4f3f-b1f8-83e7c9862eb7.png", alt: "Depoimento Renata S" },
    { src: "/lovable-uploads/6114ccb2-469f-4126-bf21-e70322a35f04.png", alt: "Depoimento Fernanda L." },
    { src: "/lovable-uploads/bcda3992-c254-45c2-9799-67587e27d46f.png", alt: "Depoimento Marina T." },
    { src: "/lovable-uploads/f570b8f6-1fcf-42f8-a33d-3018b931e92e.png", alt: "Depoimento Juliana M." },
    { src: "/lovable-uploads/adacdc22-660c-450c-93a7-e7080c05a50a.png", alt: "Depoimento Gabriel C." },
    { src: "/lovable-uploads/d23cc9a5-25f5-4236-8b1a-de22248a5904.png", alt: "Depoimento Paulo V." }
  ];

  const tools = [
    { name: 'Aromaterapia Terapêutica', type: 'aromaterapia', description: 'Óleos essenciais e técnicas para equilíbrio energético' },
    { name: 'Cristais Ativos', type: 'cristais', description: 'Guia completo de cristais e suas propriedades terapêuticas' },
    { name: 'Florais de Impacto', type: 'florais', description: 'Essências florais para transformação emocional' },
    { name: 'Reiki Profissional', type: 'reiki', description: 'Técnicas avançadas de canalização de energia' },
    { name: 'Meditações Guiadas', type: 'meditacao', description: 'Scripts prontos para sessões de meditação' },
    { name: 'Numerologia Prática', type: 'numerologia', description: 'Análises numerológicas para autoconhecimento' },
    { name: 'Oráculo do Perdão', type: 'oraculo', description: 'Cartas e técnicas para liberação emocional' },
  ];

  const benefits = [
    'Aumentar a eficácia das terapias em até 80%',
    'Gerar mais agendamentos com clientes satisfeitos',
    'Elevar o nível de profissionalismo e credibilidade',
    'Expandir sua gama de técnicas terapêuticas',
    'Criar sessões mais impactantes e transformadoras'
  ];

  const testimonials = [
    {
      name: 'Marina Silva',
      title: 'Terapeuta Holística',
      content: 'Minha prática se transformou completamente! Os clientes ficam impressionados com os resultados e sempre voltam.',
      image: testimonialImage,
    },
    {
      name: 'Carlos Roberto',
      title: 'Reikiano Profissional',
      content: 'O Kit me deu confiança para oferecer sessões mais completas. Minha agenda nunca esteve tão cheia!',
      image: testimonialImage,
    },
    {
      name: 'Ana Paula',
      title: 'Aromaterapeuta',
      content: 'Incredible! As ferramentas são práticas e realmente funcionam. Meus clientes adoram as novas técnicas.',
      image: testimonialImage,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SplashCursor />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Kit de Ferramentas Holísticas"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            Kit Premium de 
            <TextShimmer 
              as="span"
              className="bg-gradient-to-r from-[hsl(322_57%_50%)] via-[hsl(344_83%_70%)] via-[hsl(344_83%_85%)] to-[hsl(270_60%_70%)] bg-clip-text text-transparent drop-shadow-lg relative [--base-color:hsl(344_83%_80%)] [--base-gradient-color:hsl(322_25%_95%)] dark:[--base-color:hsl(344_83%_70%)] dark:[--base-gradient-color:hsl(322_25%_95%)]"
              duration={3}
            >
              Ferramentas Holísticas
            </TextShimmer>
          </h1>
            <div className="mb-6 md:mb-8 relative">
              <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md w-full px-4">
                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 rounded-2xl blur-xl transform rotate-1"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-blue-400/15 via-purple-400/15 to-pink-400/15 rounded-2xl blur-lg transform -rotate-1"></div>
                
                {/* Imagem do kit */}
                <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={heroFeatures} 
                      alt="Ferramentas do Kit Holístico"
                      className="w-full rounded-xl shadow-lg ring-2 ring-white/30 ring-offset-2 ring-offset-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white/30 backdrop-blur-sm border-2 border-purple-400/90 shadow-lg shadow-purple-500/30 rounded-xl px-6 py-4 max-w-4xl mx-auto">
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                Oráculos, tarô, florais, mapas, planilhas, aromaterapia, roteiros de meditação e muito mais… Quer ver o restante? Clique abaixo e confira tudo que você vai receber!
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 sm:px-6 py-3 sm:py-4 max-w-2xl mx-auto">
              <p className="text-white font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-4 flex-wrap">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400 drop-shadow-lg" />
                  Acesso Vitalício
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400 drop-shadow-lg" />
                  Suporte completo
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400 drop-shadow-lg" />
                  Pronto para usar imediatamente
                </span>
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl px-4 sm:px-6 py-2 sm:py-3 max-w-xl mx-auto mt-4">
              <p className="text-white font-medium text-sm sm:text-base md:text-lg text-center">
                Ferramentas atualizadas {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })} ({new Date().toLocaleDateString('pt-BR', { weekday: 'long' })})
              </p>
            </div>
            
            <div className="mt-6">
            <RainbowButton 
                className="text-sm sm:text-base md:text-lg lg:text-xl py-3 md:py-4 lg:py-6 px-6 md:px-8"
                onClick={scrollToOffer}
              >
                QUERO O KIT DE FERRAMENTAS PREMIUM
              </RainbowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Product Presentation */}
      <section className="py-12 md:py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-wellness-dark">
              O que torna este Kit um diferencial para Terapeutas Holísticos?
            </h2>
            <div className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              <p className="mb-4">Um pacote completo de materiais prontos, criados especialmente para terapeutas que desejam:</p>
              <ul className="space-y-3 text-left max-w-2xl">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                  <span>Ter ferramentas práticas e visuais, prontas para aplicar em cada sessão</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                  <span>Aumentar o engajamento e potencializar os resultados dos pacientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                  <span>Atrair novos clientes com conteúdos estratégicos e alinhados com seu público nas redes sociais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                  <span>Passar mais profissionalismo, segurança e autoridade em cada atendimento</span>
                </li>
              </ul>
            </div>
            
            
            <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-wellness-dark text-center">
                Aqui está tudo o que você vai receber
              </h3>
              <ArrowDown className="w-8 h-8 md:w-12 md:h-12 text-purple-600 animate-bounce" />
            </div>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/3e706aae-c6fb-4097-8cd2-5f214d58bd22.png" 
                    alt="Pacote Reiki Profissional"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Pacote Reiki Profissional – Formulários, Técnicas e Scripts de Pós-Sessão – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 47</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Formulários, mapas de posição e scripts prontos para melhorar a experiência pós-sessão.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/72d47a4e-95d6-40f2-9b0f-7f3efa2f1668.png" 
                    alt="Aromaterapia Terapêutica"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Aromaterapia Terapêutica: Guia Profissional + Calendário de 30 Dias – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 37</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Entenda os fundamentos, aplique com segurança e integre a aromaterapia às suas sessões de forma prática e eficaz.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/5965a606-cd8e-403a-8208-a4b64a0ffaab.png" 
                    alt="Cristais Ativos"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Cristais Ativos: Manual de Programação + Tabela de Poderes Terapêuticos – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 47</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Aprenda a limpar, energizar e programar seus cristais. Inclui tabela rápida de propriedades para uso imediato.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/63cbdad7-8339-45af-8999-45ac7e76d79d.png" 
                    alt="Florais de Impacto"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Florais de Impacto: 38 Fórmulas Para Equilibrar Emoções em Minutos – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 37</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Protocolos prontos para indicar o floral ideal conforme o estado emocional do paciente.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/8deca40c-324e-4b1c-abc5-3195438bf137.png" 
                    alt="50 Meditações Guiadas"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         50 Meditações Prontas Para Sessões Poderosas – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 27</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Roteiros completos para conduzir relaxamentos, limpezas energéticas e curas emocionais profundas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/442820db-ea18-4868-a3cd-7cf1a2399af6.png" 
                    alt="Oráculo do Perdão"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Oráculo do Perdão: 65 Cartas de Ho'oponopono + Ritual de Cura Interior – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 27</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Oráculo exclusivo com mensagens curativas + guia prático para sessões de limpeza emocional.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/8c4feb9f-dc9e-4a86-8f71-b114743396ab.png" 
                    alt="Numerologia Prática"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Numerologia Prática: Calculadora Interativa – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 67</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Descubra padrões, bloqueios e potenciais ocultos do seu cliente com análise numérica em minutos com a planilha automática de cálculos no Google Sheets.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/795e82da-be4c-4045-bef7-c204d59e0636.png" 
                    alt="Guia de Leitura Rápida de Mapa Astral"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Guia de Leitura Rápida de Mapa Astral – Entenda os Ciclos e Potenciais do Seu Cliente – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 27</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Interpretação fácil e direta dos principais pontos do mapa astral, sem complicações técnicas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/03eb9e3c-9dd9-43eb-a5fa-9b95902de4c2.png" 
                    alt="Tarô Terapêutico Pronto"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Tarô Terapêutico Pronto: Baralho Completo + Manual de Leituras Intuitivas – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 67</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        As 78 cartas do Tarô Rider Waite em alta resolução em formato PDF + guia prático de leitura emocional e terapêutica.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/e07bb52f-61a3-4feb-ab3d-8b8e52026104.png" 
                    alt="Radiestesia Total"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Radiestesia Total: 90 Gráficos + Guia Prático Para Uso com Pêndulo – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 57</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Diagnóstico energético rápido com gráficos testados + instruções simples para aplicação imediata.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-wellness-light shadow-card-wellness mb-8 md:mb-12">
              <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-48">
                  <img 
                    src="/lovable-uploads/d2c7bbdd-7f16-4f1a-a779-7efabffabc7e.png" 
                    alt="Genograma Terapêutico Familiar"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-wellness-primary mt-0.5 flex-shrink-0" />
                    <div>
                       <h4 className="font-bold text-wellness-dark text-lg md:text-xl mb-2">
                         Genograma Terapêutico Familiar – Modelos + Guia Prático de Aplicação – <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 37</span>
                       </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        Mapas visuais + passo a passo para construir o genograma familiar em atendimentos de constelação e terapia sistêmica.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 md:py-20 bg-gradient-hero relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rotate-45"></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-6 h-6 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 left-1/3 w-4 h-4 bg-white rotate-45"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-white"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            BÔNUS ESPECIAIS
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-6 md:mb-8">
            Ao garantir seu Kit Essencial, você ainda recebe 5 bônus poderosos para atrair mais pacientes e mostrar profissionalismo nas redes e no atendimento
          </p>
          
          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-wellness-light shadow-card-wellness">
              <div className="w-full md:w-48 h-32 md:h-32 flex-shrink-0">
                <img 
                  src="/lovable-uploads/36119347-3035-4145-b198-c7bd08524451.png" 
                  alt="Stories Magnéticos"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm md:text-base text-wellness-dark font-medium">
                  ✓ <strong>Stories Magnéticos – 10 Fórmulas de Stories Que Vendem Sem Parecer Venda</strong><br />
                  Estratégia direta pra criar conexão e vender mais, mesmo com poucos seguidores — com técnicas prontas pra aplicar ainda hoje.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-wellness-light shadow-card-wellness">
              <div className="w-full md:w-48 h-32 md:h-32 flex-shrink-0">
                <img 
                  src="/lovable-uploads/45a025bf-bf56-43e5-8a88-e6fd23ba81e5.png" 
                  alt="Mensagens Magnéticas"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm md:text-base text-wellness-dark font-medium">
                  ✓ <strong>Mensagens Magnéticas: Roteiros de WhatsApp Para Conectar e Vender Sessões</strong><br />
                  Textos prontos que criam conexão, despertam desejo e geram mais agendamentos direto no WhatsApp.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-wellness-light shadow-card-wellness">
              <div className="w-full md:w-48 h-32 md:h-32 flex-shrink-0">
                <img 
                  src="/lovable-uploads/64b73900-409b-41fe-9444-eaefa80c46b2.png" 
                  alt="Caderno TCC Depressão"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm md:text-base text-wellness-dark font-medium">
                  ✓ <strong>Caderno Prático de TCC para Depressão: 10 Intervenções Imediatas Para Aplicar em Sessão</strong><br />
                  Ações práticas e imediatas para guiar intervenções eficazes com pacientes em estado depressivo.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-wellness-light shadow-card-wellness">
              <div className="w-full md:w-48 h-32 md:h-32 flex-shrink-0">
                <img 
                  src="/lovable-uploads/74a1d441-6be7-449f-a289-7518943ebca5.png" 
                  alt="Fichas Terapêuticas"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm md:text-base text-wellness-dark font-medium">
                  ✓ <strong>Fichas Terapêuticas Editáveis: Modelos Profissionais Para Personalizar</strong><br />
                  10 Fichas de Anamnese prontas no Canva para Aromaterapia, Florais, Tarô, Numerologia e mais.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-wellness-light shadow-card-wellness">
              <div className="w-full md:w-48 h-32 md:h-32 flex-shrink-0">
                <img 
                  src="/lovable-uploads/d5c19430-8c3a-4992-88a1-5a1a347515f0.png" 
                  alt="Recepção Terapêutica"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm md:text-base text-wellness-dark font-medium">
                  ✓ <strong>Recepção Terapêutica Premium: Kit de Boas-Vindas Para Novos Pacientes</strong><br />
                  Cartões, mini-questionário emocional e roteiro de preparação pré-sessão para gerar encantamento logo no primeiro contato.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 mt-8 md:mt-12 max-w-4xl mx-auto border border-white/30">
            <p className="text-lg md:text-xl font-semibold text-white text-center">
              Criamos cada bônus pensando na sua rotina real, trazendo soluções práticas que facilitam seu dia a dia e otimizam seu tempo!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-wellness-dark">
            Depoimentos de quem já transformou suas sessões com a nossa Coleção Terapêutica Premium
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12 max-w-4xl mx-auto">
            Veja como este conjunto de ferramentas práticas e poderosas tem transformado as sessões de terapeutas como você, trazendo resultados rápidos e reais!
          </p>
          
          <div className="relative max-w-5xl mx-auto border-2 border-wellness-primary/20 rounded-2xl p-4 md:p-8 bg-gradient-hero backdrop-blur-sm">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonialImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_100%] min-w-0 px-2"
                  >
                    <div className="flex justify-center">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full max-w-[300px] md:max-w-[350px] h-auto transition-transform duration-300 hover:scale-105 rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-wellness-primary/20 text-wellness-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-wellness-primary/20 text-wellness-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          
          {/* Copy de urgência dentro da seção de depoimentos */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-4 md:p-6 rounded-xl shadow-2xl border-2 border-red-500 animate-pulse">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Flame className="w-6 h-6 md:w-8 md:h-8 text-orange-300 animate-bounce" />
                <Flame className="w-8 h-8 md:w-10 md:h-10 text-yellow-300 animate-bounce delay-150" />
                <Flame className="w-6 h-6 md:w-8 md:h-8 text-orange-300 animate-bounce delay-300" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-center leading-tight">
                🔥OFERTA POR TEMPO LIMITADO! Adquira hoje e tenha acesso a todos os materiais, prontos para uso!🔥
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offer-section" className="py-8 md:py-20 bg-gradient-hero relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rotate-45"></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-6 h-6 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 left-1/3 w-4 h-4 bg-white rotate-45"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-white"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-12 text-white text-center leading-tight">
            RESUMINDO TUDO O QUE VOCÊ VAI LEVAR...
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-8 items-start">
                {/* Lista de itens */}
                <div className="w-full order-1 lg:order-1">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Aromaterapia Terapêutica: Guia Profissional + Calendário de 30 Dias</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Cristais Ativos: Manual de Programação + Tabela de Poderes Terapêuticos</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Florais de Impacto: 38 Fórmulas Para Equilibrar Emoções em Minutos</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Pacote Reiki Profissional – Formulários, Técnicas e Scripts de Pós-Sessão</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">50 Meditações Prontas Para Sessões Poderosas</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Oráculo do Perdão: 65 Cartas de Ho'oponopono + Ritual de Cura Interior</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Numerologia Prática: Calculadora Emocional + Planilha Interativa</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Guia de Leitura Rápida de Mapa Astral – Entenda os Ciclos e Potenciais do Seu Cliente</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Tarô Terapêutico Pronto: Baralho Completo + Manual de Leituras Intuitivas</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Radiestesia Total: 90 Gráficos + Guia Prático Para Uso com Pêndulo</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Genograma Terapêutico Familiar – Modelos + Guia Prático de Aplicação</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Stories Magnéticos – 10 Fórmulas de Stories Que Vendem Sem Parecer Venda</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Mensagens Magnéticas: Roteiros de WhatsApp Para Conectar e Vender Sessões</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Caderno Prático de TCC para Depressão: 10 Intervenções Imediatas Para Aplicar em Sessão</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2 border-b border-gray-100">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Fichas Terapêuticas Editáveis: Modelos Profissionais Para Personalizar</span>
                    </div>
                    <div className="flex items-start space-x-3 py-2">
                      <span className="text-wellness-primary font-bold text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-xs sm:text-sm md:text-base text-wellness-dark leading-snug">Recepção Terapêutica Premium: Kit de Boas-Vindas Para Novos Pacientes</span>
                    </div>
                  </div>
                </div>

                {/* Card de preço com imagem */}
                <div className="w-full flex flex-col items-center order-2 lg:order-2">
                  <Card className="w-full max-w-sm mx-auto border-wellness-primary border-2 shadow-wellness">
                    <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                      <div className="mb-4 md:mb-6">
                        <img 
                          src="/lovable-uploads/915517d8-3a59-4738-9c94-c53e0cf5dc6d.png" 
                          alt="Kit de Ferramentas Premium" 
                          className="w-full max-w-[200px] md:max-w-xs mx-auto rounded-lg shadow-md"
                        />
                      </div>
                      
                    <p className="text-xs sm:text-sm md:text-base mb-4 text-wellness-dark leading-snug">
                      Adquirindo cada material separadamente, você pagaria um total de <span className="text-red-600 text-xl md:text-2xl font-extrabold">R$ 440,00</span>, mas hoje, nessa oferta especial você vai pagar apenas:
                    </p>
                    
                    <div className="mb-4 md:mb-6">
                      <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-1 md:mb-2 flex items-center justify-center gap-1"><span className="text-green-600 text-3xl sm:text-4xl md:text-5xl font-extrabold">R$ 24,90</span> <span className="text-lg sm:text-xl md:text-2xl font-bold text-wellness-dark">á vista</span> <span className="text-base sm:text-lg md:text-xl text-wellness-dark">ou <span className="text-green-600 font-bold text-sm sm:text-base md:text-lg">4x R$ 6,96</span></span></p>
                    </div>

                    <RainbowButton 
                      className="w-full text-sm sm:text-base md:text-lg lg:text-xl py-3 md:py-4 lg:py-6 px-4"
                      onClick={() => window.open('https://go.pepperpay.com.br/icomf', '_blank')}
                    >
                      QUERO O KIT DE FERRAMENTAS PREMIUM
                    </RainbowButton>
                  </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            
            {/* Card de Garantia */}
            <div className="mt-6 md:mt-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Imagem da garantia */}
                  <div className="flex-shrink-0">
                    <img 
                      src="/lovable-uploads/1a384062-9283-4c87-83d3-34b0412c4a0d.png" 
                      alt="Garantia de 14 dias" 
                      className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    />
                  </div>
                  
                  {/* Texto da garantia */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-wellness-primary mb-3">
                      Garantia Incondicional de 14 dias
                    </h3>
                    <p className="text-base md:text-lg text-wellness-dark leading-relaxed">
                      Experimente sem riscos! Se as ferramentas não agregarem valor às suas sessões, devolvemos 100% do seu investimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action after FAQ */}
      <section className="py-8 md:py-20 bg-gradient-hero relative overflow-hidden text-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rotate-45"></div>
          <div className="absolute top-1/2 right-10 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-6 h-6 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 left-1/3 w-4 h-4 bg-white rotate-45"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-white"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-white font-semibold px-2 leading-relaxed">
              Não deixe essa oportunidade passar!
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-white font-semibold px-2 leading-relaxed">
              Acesse agora o kit completo e transforme suas sessões com mais impacto e resultados!
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 text-white font-semibold px-2 leading-relaxed">
              Clique no botão abaixo e garanta o seu agora!
            </p>
            
            {/* Seta apontando para o botão */}
            <div className="flex justify-center mb-4">
              <ArrowDownCircle className="w-12 h-12 md:w-16 md:h-16 text-white animate-bounce" />
            </div>
            
            <RainbowButton 
              className="w-full max-w-md mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 hover:scale-110 transition-all duration-500 ease-out shadow-lg hover:shadow-2xl"
              onClick={scrollToOffer}
            >
              QUERO O KIT DE FERRAMENTAS PREMIUM
            </RainbowButton>
          </div>
        </div>
      </section>

      {/* Footer - Copyright */}
      <footer className="py-8 bg-wellness-dark text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-white/70">
            © 2025 Ferramentas Holísticas Premium. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
