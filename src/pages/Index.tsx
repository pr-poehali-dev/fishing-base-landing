import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "HomeIcon",
      title: "Отдельный домик",
      description: "На 3 человека с панорамными окнами и спуском к воде",
      price: "7500₽/сутки"
    },
    {
      icon: "BedDouble",
      title: "Проживание в общем корпусе",
      description: "Номера на 3, 4 и 7 человек",
      price: "от 1000₽/сутки"
    },
    {
      icon: "Fish",
      title: "Рыбалка с гидом",
      description: "Профессиональный гид с современным оборудованием",
      price: "от 1500₽"
    },
    {
      icon: "Ship",
      title: "Вывоз на точку",
      description: "Доставка рыбаков на лучшие места",
      price: "800₽"
    },
    {
      icon: "Radar",
      title: "Аренда Garmin 1223",
      description: "Рыбопоисковая система Panoptix",
      price: "9000₽"
    },
    {
      icon: "Snowflake",
      title: "Катание на снегоходах",
      description: "Снегоходы с санями для зимней рыбалки",
      price: "1500₽"
    },
    {
      icon: "Flame",
      title: "Русская баня",
      description: "Традиционная баня на дровах, минимум 2 часа",
      price: "от 2000₽"
    },
    {
      icon: "Utensils",
      title: "Питание",
      description: "От обычных обедов до национальных блюд",
      price: "от 500₽"
    },
    {
      icon: "Car",
      title: "Парковка",
      description: "Бесплатная охраняемая парковка и слип",
      price: "бесплатно"
    },
    {
      icon: "Activity",
      title: "SUP Board и байдарки",
      description: "Аренда водного оборудования",
      price: "по запросу"
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/34947dce-950e-4e90-aa3a-fff0186d381d/files/00dd8bb2-fe15-4e49-aa73-df9b5a7007be.jpg",
      alt: "База на берегу Камы"
    },
    {
      url: "https://cdn.poehali.dev/projects/34947dce-950e-4e90-aa3a-fff0186d381d/files/5775703b-e088-4f3f-98b7-838725bce6d3.jpg",
      alt: "Улов"
    },
    {
      url: "https://cdn.poehali.dev/projects/34947dce-950e-4e90-aa3a-fff0186d381d/files/904cfedc-87e6-41a9-baad-1b96a9653a45.jpg",
      alt: "Интерьер домика"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Waves" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Камское устье</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#seasons" className="text-foreground hover:text-primary transition-colors">Сезоны</a>
            <a href="#video" className="text-foreground hover:text-primary transition-colors">Видео</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Фото</a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">Как добраться</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

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
              <a href="https://wa.me/79046779322" target="_blank" rel="noopener noreferrer">
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

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="seasons" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Отдых круглый год
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-background rounded-2xl p-8 shadow-lg animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Icon name="Snowflake" className="text-blue-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold">Зимняя рыбалка</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Увлекательная зимняя рыбалка на снегоходе! Принимаем от 1 до 10 гостей в удобных санях.
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Современное оборудование:</strong> рыбопоисковая система Panoptix Garmin 1223xsv lvs 34</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Активный поиск:</strong> не стоим на одном месте — постоянно ищем активную рыбу</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Весь световой день:</strong> рыбачим на глубинах 3-8 метров, где клёв гарантирован</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Приманки:</strong> вибы, балансиры и другие эффективные снасти</p>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-foreground pt-4">
                  Гарантируем шикарные виды, свежий воздух и полный перезаряд от городской суеты! 
                  Делимся опытом и отвечаем на все вопросы.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Icon name="Sun" className="text-green-500" size={32} />
                </div>
                <h3 className="text-3xl font-bold">Летняя рыбалка 2025</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Профессиональная рыбалка с опытным гидом. Вся техника предоставляется!
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Современные катера:</strong> мощные моторы и рыбопоисковое оборудование Panoptix 34</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Профессиональные гиды:</strong> знают акваторию и методы поиска рыбы</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Индивидуальная рыбалка:</strong> группа до 3 человек, выезд на 8 часов</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Экскурсии на катере:</strong> Гора Лобач, Юрьевские пещеры</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p><strong>Дополнительно:</strong> аренда SUP Board, байдарок, ПВХ лодок</p>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-foreground pt-4">
                  Все ваши предпожелания обговариваются индивидуально. Номера на 3, 4 и 7 человек.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Идеальные выходные мужчин
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl animate-scale-in" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://vk.com/video_ext.php?oid=-110673646&id=456239017&hd=2"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                title="Видео базы Fish Volga"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Фотогалерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-video group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Как добраться
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 animate-fade-in">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Car" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">На автомобиле</h3>
                  <p className="text-muted-foreground">
                    Из Казани примерно 1,5 часа в пути. Следуйте по трассе М7 в сторону Камского Устья.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Bus" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">На автобусе</h3>
                  <p className="text-muted-foreground">
                    Автобус Казань - Камское Устье от Северного вокзала Казани. 
                    Мы встретим вас на остановке.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Координаты</h3>
                  <p className="text-muted-foreground">
                    55.173154° N, 49.267368° E<br />
                    РТ, Лаишевский район, пос. Камское Устье
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg animate-scale-in h-[400px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=49.267368%2C55.173154&z=14&l=map&pt=49.267368,55.173154,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта проезда"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

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
                <a href="tel:+79046779322" className="hover:underline">+7 (904) 677-93-22</a>
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
              <a href="https://wa.me/79046779322" target="_blank" rel="noopener noreferrer">
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

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Waves" size={24} />
            <span className="text-xl font-bold">Камское устье</span>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Рыболовная база "Камское устье". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;