import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
  image?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  title, 
  content, 
  image,
  rating = 5 
}) => {
  return (
    <Card className="border-wellness-light shadow-card-wellness hover:shadow-wellness transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-wellness-accent text-wellness-accent" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{content}"</p>
        <div className="flex items-center space-x-3">
          {image && (
            <img 
              src={image} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{title}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;