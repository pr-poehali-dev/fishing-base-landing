import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

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
    icon: "Waves",
    title: "Аренда рыболовных снастей",
    description: "Удилища, снасти, кружки и всё необходимое для рыбалки",
    price: "от 500₽"
  },
  {
    icon: "Snowflake",
    title: "Катание на снегоходах",
    description: "Увлекательное катание на снегоходе",
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
  }
];

const gallery = [
  {
    url: "https://cdn.poehali.dev/files/222738b3-72ea-413b-9fcb-fa22e985416b.jpg",
    alt: ""
  },
  {
    url: "https://cdn.poehali.dev/files/2dd3d126-18b5-4369-88e7-1b7d186479f0.jpg",
    alt: ""
  },
  {
    url: "https://cdn.poehali.dev/files/200ac01b-d0ef-40f6-a378-ec64362dc085.jpg",
    alt: ""
  },
  {
    url: "https://cdn.poehali.dev/files/c208c3d8-2310-44fe-a549-3e8d96da65e7.jpg",
    alt: ""
  },
  {
    url: "https://cdn.poehali.dev/files/271b493f-edae-4fee-ba28-6f10c7d995a6.jpg",
    alt: ""
  },
  {
    url: "https://cdn.poehali.dev/files/a4399e5b-5b6f-423c-a1cb-7b3fd24f9297.jpg",
    alt: ""
  }
];

const ContentSections = () => {
  return (
    <>
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

      <section id="main-building" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Комнаты в основном корпусе
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Комфортное проживание с современными удобствами
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/2504a8d5-ccc3-4ef2-83e1-ea3856434dcc.jpg" 
                      alt="Комната в основном корпусе"
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/13b0d617-81c4-4998-a13a-cc77805e78e6.jpg" 
                      alt="Комната на несколько человек"
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg col-span-2">
                    <img 
                      src="https://cdn.poehali.dev/files/82941f36-3fb6-4ea1-9671-854d42031675.jpg" 
                      alt="Просторная комната с видом"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="bg-muted/50 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="Building2" className="text-primary" size={28} />
                    Удобства и оснащение
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Icon name="BedDouble" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Комфортные комнаты</p>
                        <p className="text-muted-foreground">Просторные номера на 3, 4 и 7 человек с удобными кроватями</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Bath" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Отдельные санузлы</p>
                        <p className="text-muted-foreground">Современные душевые кабины в каждом санузле</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Tv" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Телевизоры в комнатах</p>
                        <p className="text-muted-foreground">Отдых с комфортом в вечернее время</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Refrigerator" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Гостевая зона</p>
                        <p className="text-muted-foreground">Общая гостевая с холодильниками для хранения продуктов</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Coffee" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Всё необходимое</p>
                        <p className="text-muted-foreground">Чистое бельё, полотенца, средства гигиены</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-background rounded-xl">
                    <p className="text-center text-lg font-medium">
                      Уютная атмосфера и домашний комфорт для вашего отдыха
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Домик с видом на Волгу
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Комфортное размещение для троих с панорамными окнами
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/files/28a5a4d4-67fc-4465-bac0-37d50bd24efb.jpg" 
                    alt="Домик Fish Volga с панорамными окнами"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/be868799-3952-406d-b5aa-f4d1696860b5.jpg" 
                      alt="Интерьер домика"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/d3964221-6148-4295-83c5-07e15a20e234.jpg" 
                      alt="Вид на Волгу из окна"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="bg-background rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="Home" className="text-primary" size={28} />
                    Особенности размещения
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">До 3 гостей</p>
                        <p className="text-muted-foreground">Комфортное размещение для небольшой компании</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Панорамные окна</p>
                        <p className="text-muted-foreground">Потрясающий обзор на Волгу из каждого уголка</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Mountain" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Вид на Волгу</p>
                        <p className="text-muted-foreground">Просыпайтесь под звуки природы и речные пейзажи</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Wifi" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Все удобства</p>
                        <p className="text-muted-foreground">Комфорт как дома: Wi-Fi, отопление, кухня</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Leaf" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Экологичность</p>
                        <p className="text-muted-foreground">Деревянная отделка и природные материалы</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/10 rounded-xl">
                    <p className="text-center text-lg font-medium">
                      Идеальное место для отдыха всей семьёй или с друзьями
                    </p>
                  </div>
                </div>
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
                    РТ, Камско-Устьинский район, п.г.т. Камское Устье
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
    </>
  );
};

export default ContentSections;