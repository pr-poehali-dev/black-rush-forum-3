import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      name: 'Новости и объявления',
      icon: 'Megaphone',
      color: 'from-red-500 to-orange-500',
      description: 'Официальные новости проекта',
      topics: 145,
      posts: 2341,
      lastPost: { author: 'Администрация', title: 'Обновление сервера 3.0', time: '2 часа назад' },
      subforums: [
        { name: 'Новости проекта', topics: 89, posts: 1432 },
        { name: 'Объявления', topics: 56, posts: 909 }
      ]
    },
    {
      id: 2,
      name: 'Общение',
      icon: 'MessageCircle',
      color: 'from-blue-500 to-cyan-500',
      description: 'Обсуждения и флуд',
      topics: 3421,
      posts: 45678,
      lastPost: { author: 'Player123', title: 'Лучшие моменты в игре', time: '5 минут назад' },
      subforums: [
        { name: 'Общий чат', topics: 2134, posts: 28945 },
        { name: 'Истории игроков', topics: 876, posts: 12456 },
        { name: 'Флудилка', topics: 411, posts: 4277 }
      ]
    },
    {
      id: 3,
      name: 'Помощь игрокам',
      icon: 'HelpCircle',
      color: 'from-green-500 to-emerald-500',
      description: 'Вопросы и ответы',
      topics: 1872,
      posts: 9234,
      lastPost: { author: 'Helper_Alex', title: 'Как заработать быстро?', time: '12 минут назад' },
      subforums: [
        { name: 'Вопросы новичков', topics: 987, posts: 5432 },
        { name: 'Гайды и обучение', topics: 543, posts: 2341 },
        { name: 'FAQ', topics: 342, posts: 1461 }
      ]
    },
    {
      id: 4,
      name: 'Жалобы и предложения',
      icon: 'Flag',
      color: 'from-purple-500 to-pink-500',
      description: 'Репорты и идеи',
      topics: 934,
      posts: 3456,
      lastPost: { author: 'Player_456', title: 'Баг с инвентарем', time: '1 час назад' },
      subforums: [
        { name: 'Жалобы на игроков', topics: 456, posts: 1789 },
        { name: 'Предложения', topics: 321, posts: 1234 },
        { name: 'Баги', topics: 157, posts: 433 }
      ]
    },
    {
      id: 5,
      name: 'Фракции',
      icon: 'Users',
      color: 'from-yellow-500 to-orange-500',
      description: 'Все о фракциях',
      topics: 567,
      posts: 4532,
      lastPost: { author: 'FractionLeader', title: 'Набор в LSPD', time: '30 минут назад' },
      subforums: [
        { name: 'Государственные', topics: 234, posts: 2341 },
        { name: 'Криминал', topics: 198, posts: 1567 },
        { name: 'Нелегальные', topics: 135, posts: 624 }
      ]
    },
    {
      id: 6,
      name: 'Рынок',
      icon: 'ShoppingCart',
      color: 'from-indigo-500 to-purple-500',
      description: 'Покупка и продажа',
      topics: 2341,
      posts: 8765,
      lastPost: { author: 'Seller_Pro', title: 'Продаю бизнес', time: '15 минут назад' },
      subforums: [
        { name: 'Продажа', topics: 1234, posts: 4532 },
        { name: 'Покупка', topics: 876, posts: 3021 },
        { name: 'Обмен', topics: 231, posts: 1212 }
      ]
    }
  ];

  const stats = {
    totalTopics: 9280,
    totalPosts: 74006,
    totalMembers: 15678,
    newestMember: 'NewPlayer_2026',
    onlineNow: 234
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <Icon name="Flame" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">BLACK RUSSIA</h1>
                <p className="text-xs text-gray-400">Официальный форум проекта</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Icon name="LogIn" size={16} className="mr-2" />
                Вход
              </Button>
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
          
          <nav className="flex gap-1 pb-3 overflow-x-auto">
            <Button variant="ghost" className="text-white hover:bg-gray-800 text-sm">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 text-sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 text-sm">
              <Icon name="Users" size={16} className="mr-2" />
              Участники
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 text-sm">
              <Icon name="Calendar" size={16} className="mr-2" />
              Календарь
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 text-sm">
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Помощь
            </Button>
          </nav>
        </div>
      </header>

      <div className="bg-gradient-to-r from-red-950/30 to-orange-950/30 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Icon name="Home" size={14} />
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Форум</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">
            {categories.map((category) => (
              <Card key={category.id} className="bg-card border-border overflow-hidden">
                <div 
                  className={`p-4 bg-gradient-to-r ${category.color} cursor-pointer`}
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon name={category.icon as any} size={20} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white">{category.name}</h2>
                        <p className="text-sm text-white/80">{category.description}</p>
                      </div>
                    </div>
                    <Icon 
                      name={expandedCategory === category.id ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-white"
                    />
                  </div>
                </div>

                {expandedCategory === category.id && (
                  <div className="divide-y divide-border">
                    {category.subforums.map((subforum) => (
                      <div key={subforum.name} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                              <Icon name="MessageSquare" size={16} className="text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{subforum.name}</h3>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                                <span>Тем: {subforum.topics}</span>
                                <span>•</span>
                                <span>Сообщений: {subforum.posts}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-4 bg-muted/30 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="FileText" size={16} />
                        <span>{category.topics} тем</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="MessageSquare" size={16} />
                        <span>{category.posts} сообщений</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs bg-gradient-to-br from-gray-700 to-gray-800 text-white">
                            {category.lastPost.author.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-right">
                          <p className="font-medium text-foreground text-xs">{category.lastPost.title}</p>
                          <p className="text-xs text-muted-foreground">
                            от {category.lastPost.author} • {category.lastPost.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <Card className="p-4 bg-card border-border">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Icon name="BarChart3" size={18} className="text-primary" />
                Статистика форума
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Всего тем:</span>
                  <span className="font-semibold text-foreground">{stats.totalTopics.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Сообщений:</span>
                  <span className="font-semibold text-foreground">{stats.totalPosts.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Участников:</span>
                  <span className="font-semibold text-foreground">{stats.totalMembers.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Новый участник:</span>
                  <span className="font-semibold text-primary text-xs">{stats.newestMember}</span>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-green-900">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Сейчас на форуме
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Пользователей онлайн:</span>
                  <Badge className="bg-green-600 text-white">{stats.onlineNow}</Badge>
                </div>
                <Separator className="bg-green-900/50" />
                <div className="text-xs text-gray-400">
                  <p>Рекорд: 1,234 пользователя</p>
                  <p className="text-gray-500">31 декабря 2025</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Icon name="Crown" size={18} className="text-yellow-500" />
                Топ авторов
              </h3>
              <div className="space-y-2">
                {[
                  { name: 'AdminPro', posts: 5432, avatar: 'AP' },
                  { name: 'Player_Legend', posts: 3421, avatar: 'PL' },
                  { name: 'Helper_Max', posts: 2876, avatar: 'HM' }
                ].map((user, idx) => (
                  <div key={user.name} className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">
                      {idx + 1}
                    </Badge>
                    <Avatar className="w-7 h-7">
                      <AvatarFallback className="text-xs bg-gradient-to-br from-gray-700 to-gray-800 text-white">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="flex-1 text-foreground">{user.name}</span>
                    <span className="text-muted-foreground text-xs">{user.posts}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2026 Black Russia Forum. Все права защищены</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Правила форума</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Поддержка</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
