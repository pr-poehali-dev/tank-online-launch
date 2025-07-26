import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-military-dark via-military-steel to-military-red">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/35685f52-fdc1-4d07-a1bf-4ee301a992bf.jpg')`
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 animate-fade-in">
          <div className="mb-8 animate-scale-in">
            <Icon name="Zap" size={80} className="mx-auto mb-4 text-military-orange animate-military-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-wider">
            TANKS
            <br />
            <span className="text-military-orange">ONLINE</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-bold uppercase tracking-wide">
            Сражения игрок против игрока в реальном времени
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-military-orange hover:bg-military-orange/80 text-white font-bold px-8 py-4 text-lg uppercase tracking-wide animate-military-pulse"
            >
              <Icon name="Play" size={24} className="mr-2" />
              Скоро релиз
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-military-dark font-bold px-8 py-4 text-lg uppercase tracking-wide"
            >
              <Icon name="Info" size={24} className="mr-2" />
              Подробнее
            </Button>
          </div>
        </div>
        
        {/* Military Icons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8 text-white/60 z-20">
          <Icon name="Target" size={32} className="animate-military-pulse" />
          <Icon name="Star" size={32} className="animate-military-pulse" />
          <Icon name="Shield" size={32} className="animate-military-pulse" />
          <Icon name="Zap" size={32} className="animate-military-pulse" />
        </div>
      </section>

      {/* Game Features Section */}
      <section className="py-20 px-4 bg-military-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16 uppercase tracking-wider">
            Боевые характеристики
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-military-steel/10 border-military-orange border-2 p-8 text-center animate-fade-in">
              <Icon name="Crosshair" size={48} className="mx-auto mb-4 text-military-orange" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">PvP Битвы</h3>
              <p className="text-gray-300">
                Сражайтесь против реальных игроков в интенсивных танковых дуэлях
              </p>
            </Card>
            
            <Card className="bg-military-steel/10 border-military-orange border-2 p-8 text-center animate-fade-in">
              <Icon name="Timer" size={48} className="mx-auto mb-4 text-military-orange" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">Реальное время</h3>
              <p className="text-gray-300">
                Молниеносные реакции и тактическое мышление решают исход боя
              </p>
            </Card>
            
            <Card className="bg-military-steel/10 border-military-orange border-2 p-8 text-center animate-fade-in">
              <Icon name="Trophy" size={48} className="mx-auto mb-4 text-military-orange" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">Рейтинги</h3>
              <p className="text-gray-300">
                Поднимайтесь в рейтинге и станьте легендарным танкистом
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Release Info Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-military-red to-military-steel">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-wider">
            Готовьтесь к войне
          </h2>
          
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-12 border-2 border-military-orange">
            <Icon name="AlertTriangle" size={64} className="mx-auto mb-6 text-military-orange animate-military-pulse" />
            <h3 className="text-3xl font-bold text-white mb-6 uppercase">Дата релиза</h3>
            <p className="text-2xl text-military-orange font-bold mb-8 uppercase tracking-widest">
              Пока неизвестна
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Следите за обновлениями и будьте готовы к эпическим танковым сражениям!
            </p>
            
            <Button 
              size="lg"
              className="bg-military-orange hover:bg-military-orange/80 text-white font-bold px-12 py-4 text-xl uppercase tracking-wide"
            >
              <Icon name="Bell" size={24} className="mr-2" />
              Уведомить о релизе
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-military-dark py-12 px-4 border-t-2 border-military-orange">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Target" size={24} className="text-military-orange" />
            <Icon name="Shield" size={24} className="text-military-orange" />
            <Icon name="Zap" size={24} className="text-military-orange" />
          </div>
          <p className="text-gray-400 uppercase tracking-wide">
            © 2024 Tanks Online. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;