import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-viral-light to-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              The Mattress That's
              <span className="text-viral-blue"> Going Viral</span>
              <span className="text-2xl lg:text-3xl">™</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Finally, a mattress that gets more likes than your food pics. 
              Experience the sleep sensation that's breaking the internet (and your bad sleep habits).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="text-xl px-8 py-6 bg-viral-blue hover:bg-viral-blue/90"
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SHOP NOW 🔥
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-8 py-6"
                onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Read Reviews 📱
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-bold">4.9/5</span>
                <span className="text-muted-foreground">(69,420 reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚚</span>
                <span className="font-bold">Free Shipping</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/1e5d92aa-41e7-4cda-a4c5-755a56d6e2e4.png"
              alt="Woman sitting on Viral Mattress Brand"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-viral-blue text-white px-4 py-2 rounded-full font-bold animate-bounce">
              TRENDING! 📈
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;