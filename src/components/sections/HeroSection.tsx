import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/694426cf-5747-4d79-ab44-ab30ef92205c.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Рыболовная база <span className="text-primary">Fish Volga</span><br />
          <span className="text-2xl md:text-4xl">в Камском Устье</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Отдых на природе и отличная рыбалка в самом живописном месте Татарстана
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://wa.me/79046679933" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
            <a href="https://t.me/FishVolgaKamskoyeUstye" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-2" size={24} />
              Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
