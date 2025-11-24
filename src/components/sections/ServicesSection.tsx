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

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
