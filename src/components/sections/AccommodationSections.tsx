import Icon from "@/components/ui/icon";

const AccommodationSections = () => {
  return (
    <>
      <section id="main-building" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Комнаты в основном корпусе
          </h2>

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
                      <Icon name="Wifi" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Интернет и комфорт</p>
                        <p className="text-muted-foreground">Wi-Fi, отопление и все необходимое для уютного пребывания</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="UtensilsCrossed" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Общая кухня</p>
                        <p className="text-muted-foreground">Полностью оборудованная кухня с посудой и бытовой техникой</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                    <p className="text-center font-medium">
                      Цена: <span className="text-primary text-xl font-bold">от 1000₽/сутки</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="houses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Отдельные домики
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in order-2 md:order-1">
                <div className="bg-background rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icon name="HomeIcon" className="text-primary" size={28} />
                    Ваш личный уголок на берегу
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-lg">Для компании до 3 человек</p>
                        <p className="text-muted-foreground">Уютное пространство для комфортного отдыха</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Icon name="Eye" className="text-primary flex-shrink-0 mt-1" size={24} />
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

              <div className="space-y-4 animate-fade-in order-1 md:order-2" style={{ animationDelay: '200ms' }}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/files/082d5e11-ac44-4aec-84c2-e0f2939ea9d1.jpg" 
                    alt="Домик с видом на Волгу"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/fb22bf67-9678-48c5-b00b-b9842bf57a07.jpg" 
                      alt="Интерьер домика"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/files/941c8bf6-c60c-490c-a86c-7a1f89a84e15.jpg" 
                      alt="Спальня с видом на Волгу"
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccommodationSections;