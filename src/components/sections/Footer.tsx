import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
          Свяжитесь с нами
        </h2>
        <p className="text-xl mb-12 opacity-90">
          Ответим на все вопросы и поможем забронировать место
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Phone" className="mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <a href="tel:+79046679933" className="hover:underline">+7 (904) 667-99-33</a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Send" className="mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Telegram</h3>
              <a href="https://t.me/FishVolgaKamskoyeUstye" target="_blank" rel="noopener noreferrer" className="hover:underline">@FishVolgaKamskoyeUstye</a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Clock" className="mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Режим работы</h3>
              <p>Круглосуточно,<br />7 дней в неделю</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <a href="https://wa.me/79046679933" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <a href="https://t.me/FishVolgaKamskoyeUstye" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-2" size={24} />
              Telegram канал
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
