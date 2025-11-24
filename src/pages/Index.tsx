import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const candles = [
    {
      id: 1,
      name: 'Лесной аромат',
      price: 1200,
      image: 'https://cdn.poehali.dev/projects/fe2ba399-339e-494f-8d9a-c213031ce8eb/files/9c10a8d2-dd48-4df0-933a-5f0e6b41a011.jpg',
      description: 'Свежесть хвои и древесные ноты',
      category: 'Натуральные'
    },
    {
      id: 2,
      name: 'Травяной сад',
      price: 1400,
      image: 'https://cdn.poehali.dev/projects/fe2ba399-339e-494f-8d9a-c213031ce8eb/files/cb228468-41dd-47e7-8b7c-4f8733f7eddc.jpg',
      description: 'Лаванда, шалфей и эвкалипт',
      category: 'Премиум'
    },
    {
      id: 3,
      name: 'Цветочная поляна',
      price: 1300,
      image: 'https://cdn.poehali.dev/projects/fe2ba399-339e-494f-8d9a-c213031ce8eb/files/996a9ca7-096c-4141-bd02-80f86bdc8822.jpg',
      description: 'Нежные цветочные ноты',
      category: 'Натуральные'
    },
    {
      id: 4,
      name: 'Морской бриз',
      price: 1350,
      image: 'https://cdn.poehali.dev/projects/fe2ba399-339e-494f-8d9a-c213031ce8eb/files/9c10a8d2-dd48-4df0-933a-5f0e6b41a011.jpg',
      description: 'Свежесть морского побережья',
      category: 'Премиум'
    },
    {
      id: 5,
      name: 'Ванильный рай',
      price: 1250,
      image: 'https://cdn.poehali.dev/projects/fe2ba399-339e-494f-8d9a-c213031ce8eb/files/cb228468-41dd-47e7-8b7c-4f8733f7eddc.jpg',
      description: 'Сладкая ваниль и карамель',
      category: 'Классика'
    },
    {
      id: 6,
      name: 'Цитрусовая свежесть',
      price: 1150,
      image: 'https://cdn.poehali.dev/projects/fe2ba399-339e-494f-8d9a-c213031ce8eb/files/996a9ca7-096c-4141-bd02-80f86bdc8822.jpg',
      description: 'Бергамот, лимон и апельсин',
      category: 'Классика'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      text: 'Потрясающие свечи! Аромат держится долго, горят равномерно. Заказала уже третий раз.',
      date: '15 ноября 2024'
    },
    {
      id: 2,
      name: 'Мария Смирнова',
      rating: 5,
      text: 'Очень красивые и качественные. Упаковка шикарная, отличный подарок!',
      date: '10 ноября 2024'
    },
    {
      id: 3,
      name: 'Елена Волкова',
      rating: 5,
      text: 'Лучшие свечи, что я пробовала. Натуральные ароматы, ручная работа чувствуется.',
      date: '5 ноября 2024'
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Lumière</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'about', 'delivery', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О нас'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Icon name="ShoppingCart" size={18} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Свечи ручной работы
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаем уникальные ароматические свечи с душой. Каждая свеча — произведение искусства.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ручная работа</h3>
                <p className="text-muted-foreground">Каждая свеча создается вручную с любовью</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Натуральные материалы</h3>
                <p className="text-muted-foreground">Только экологичные компоненты</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Уникальный дизайн</h3>
                <p className="text-muted-foreground">Эксклюзивные композиции и формы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш каталог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите свечу, которая создаст идеальную атмосферу в вашем доме
            </p>
          </div>
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Все
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Натуральные
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Премиум
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Классика
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candles.map((candle) => (
              <Card key={candle.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={candle.image}
                    alt={candle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{candle.name}</CardTitle>
                    <Badge variant="secondary">{candle.category}</Badge>
                  </div>
                  <CardDescription>{candle.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{candle.price} ₽</span>
                  <Button>
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Lumière — это мастерская по созданию уникальных свечей ручной работы. Мы верим, что свеча — это не просто источник света, а способ создать атмосферу уюта и гармонии в вашем доме.
              </p>
              <p>
                Каждая наша свеча создается вручную с использованием натуральных материалов: соевого и пчелиного воска, эфирных масел и хлопковых фитилей. Мы тщательно подбираем ароматические композиции, чтобы они дарили вам незабываемые эмоции.
              </p>
              <p>
                Наша миссия — приносить в ваш дом красоту, тепло и уникальные ароматы, которые будут радовать вас долгое время.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">3+</p>
                <p className="text-muted-foreground">года опыта</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-muted-foreground">натуральные материалы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Доставка и оплата</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Доставка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">По Москве</span>
                    <span className="font-semibold">300 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">По России</span>
                    <span className="font-semibold">от 400 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Бесплатная доставка</span>
                    <span className="font-semibold">от 3000 ₽</span>
                  </div>
                  <Separator className="my-3" />
                  <p className="text-sm text-muted-foreground">
                    Доставка осуществляется в течение 1-3 дней по Москве и 3-7 дней по России
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Оплата</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Банковской картой онлайн</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>При получении наличными</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Переводом на карту</span>
                  </div>
                  <Separator className="my-3" />
                  <p className="text-sm text-muted-foreground">
                    Все платежи защищены и проходят через безопасные каналы
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Отзывы клиентов</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription className="text-xs">{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">hello@lumiere.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, 15</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Lumière. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
