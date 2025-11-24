import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Waves" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-primary">Камское Устье</span>
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
  );
};

export default Header;
