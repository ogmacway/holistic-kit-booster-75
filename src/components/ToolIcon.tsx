import React from 'react';
import { Flower, Gem, Heart, Sparkles, Brain, Star, Book, Zap } from 'lucide-react';

interface ToolIconProps {
  type: string;
  className?: string;
}

const ToolIcon: React.FC<ToolIconProps> = ({ type, className = "w-8 h-8" }) => {
  const getIcon = () => {
    switch (type) {
      case 'aromaterapia':
        return <Flower className={className} />;
      case 'cristais':
        return <Gem className={className} />;
      case 'florais':
        return <Heart className={className} />;
      case 'reiki':
        return <Sparkles className={className} />;
      case 'meditacao':
        return <Brain className={className} />;
      case 'numerologia':
        return <Star className={className} />;
      case 'oraculo':
        return <Book className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  return getIcon();
};

export default ToolIcon;