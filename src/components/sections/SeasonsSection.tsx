import Icon from "@/components/ui/icon";

const SeasonsSection = () => {
  return (
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
  );
};

export default SeasonsSection;
