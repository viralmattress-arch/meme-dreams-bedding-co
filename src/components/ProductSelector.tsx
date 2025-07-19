import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Size {
  name: string;
  price: number;
  description: string;
}

const sizes: Size[] = [
  { name: "Twin", price: 299, description: "Perfect for one person (or your ex's heart)" },
  { name: "Full", price: 399, description: "For you + your laptop + snacks" },
  { name: "Queen", price: 499, description: "Royal treatment for your sleep schedule" },
  { name: "King", price: 699, description: "Live like the mattress royalty you are" }
];

const ProductSelector = () => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const { toast } = useToast();

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast({
        title: "Hold up! 🛑",
        description: "Pick a size first! We're not mind readers (yet).",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "VIRAL SUCCESS! 🎉",
      description: `Your ${selectedSize.name} Viral Mattress™ is going viral! Check your dreams in 3-5 business days.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12" id="product">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-4">Choose Your Viral Experience™</h2>
        <p className="text-xl text-muted-foreground">
          Warning: May cause excessive comfort and uncontrollable sleep satisfaction
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {sizes.map((size) => (
          <Card 
            key={size.name}
            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
              selectedSize?.name === size.name 
                ? 'ring-2 ring-viral-blue bg-viral-light' 
                : 'hover:shadow-lg'
            }`}
            onClick={() => setSelectedSize(size)}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-black">{size.name}</CardTitle>
              <CardDescription className="text-sm">{size.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-black text-viral-blue mb-2">
                ${size.price}
              </div>
              <Badge variant={selectedSize?.name === size.name ? "default" : "secondary"}>
                {selectedSize?.name === size.name ? "SELECTED" : "CHOOSE ME"}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          size="lg" 
          className="text-xl px-8 py-6 bg-viral-blue hover:bg-viral-blue/90"
          onClick={handleBuyNow}
        >
          BUY NOW & GO VIRAL 🚀
          {selectedSize && (
            <span className="ml-2">${selectedSize.price}</span>
          )}
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          ⚡ Free shipping because we're not monsters<br />
          🎯 30-night trial (sleep on it, literally)<br />
          💸 Payment plans available (because adulting is expensive)
        </p>
      </div>
    </div>
  );
};

export default ProductSelector;