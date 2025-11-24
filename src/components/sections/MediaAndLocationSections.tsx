import Icon from "@/components/ui/icon";

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

const MediaAndLocationSections = () => {
  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt || `Фото базы ${index + 1}`}
                  className="w-full h-[300px] object-cover"
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

export default MediaAndLocationSections;
