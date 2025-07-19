const features = [
  {
    icon: "🧠",
    title: "Memory Foam That Actually Remembers",
    description: "Unlike your ex, this foam remembers every curve and never forgets your comfort preferences."
  },
  {
    icon: "❄️",
    title: "Cooling Technology",
    description: "Stays cooler than your social media presence. No more waking up like a human furnace."
  },
  {
    icon: "🔇",
    title: "Motion Isolation",
    description: "Your partner's 3AM snack runs won't wake you. Finally, peace in our time."
  },
  {
    icon: "🌱",
    title: "Eco-Friendly",
    description: "Made from sustainable materials because we care about the planet (and good PR)."
  },
  {
    icon: "💸",
    title: "Payment Plans Available",
    description: "Because good sleep shouldn't require selling a kidney. Spread the cost, not the stress."
  },
  {
    icon: "🚚",
    title: "Free White Glove Delivery",
    description: "We'll carry it to your bedroom and set it up. No heavy lifting, just heavy sleeping."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Why It's Going Viral</h2>
          <p className="text-xl text-muted-foreground">
            It's not just a mattress, it's a lifestyle upgrade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="/lovable-uploads/1668d1cc-8b20-4bf0-94ec-4466f0174b4c.png"
              alt="Woman relaxing on Viral Mattress Brand"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <img 
              src="/lovable-uploads/a4c3969c-12f2-48b7-be2b-6678216718d1.png"
              alt="Person sleeping peacefully on Viral Mattress Brand"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;