import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TextShimmer } from '@/components/ui/text-shimmer';
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
      const targetPosition = offerSection.offsetTop - 80; // Offset para não cobrir o conteúdo
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200; // Duração mais lenta (1.2 segundos)
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t: number, b: number, c: number, d: number) {
        // Função de easing cubic-out para suavidade natural
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
      }

      requestAnimationFrame(animation);
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
              <CardContent className="p-4
(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)
