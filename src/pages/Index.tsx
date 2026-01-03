import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const topics = [
    {
      id: 1,
      title: 'Как правильно настроить production окружение?',
      author: 'DarkCoder',
      category: 'Технические вопросы',
      replies: 47,
      views: 1283,
      likes: 89,
      time: '2 часа назад',
      tags: ['production', 'deployment', 'devops']
    },
    {
      id: 2,
      title: 'Обновление платформы: что нового в версии 2.0',
      author: 'AdminTeam',
      category: 'Новости',
      replies: 156,
      views: 5421,
      likes: 342,
      time: '5 часов назад',
      tags: ['новости', 'обновление', 'анонс']
    },
    {
      id: 3,
      title: 'Оптимизация производительности React приложений',
      author: 'ReactMaster',
      category: 'Разработка',
      replies: 23,
      views: 892,
      likes: 67,
      time: '1 день назад',
      tags: ['react', 'optimization', 'performance']
    },
    {
      id: 4,
      title: 'Лучшие практики работы с базами данных',
      author: 'DBGuru',
      category: 'Базы данных',
      replies: 34,
      views: 1547,
      likes: 112,
      time: '2 дня назад',
      tags: ['database', 'sql', 'postgresql']
    }
  ];

  const users = [
    { name: 'DarkCoder', posts: 234, reputation: 8900, avatar: 'DC', online: true },
    { name: 'ReactMaster', posts: 189, reputation: 7200, avatar: 'RM', online: true },
    { name: 'AdminTeam', posts: 567, reputation: 15000, avatar: 'AT', online: false },
    { name: 'DBGuru', posts: 445, reputation: 12300, avatar: 'DG', online: true },
    { name: 'CodeNinja', posts: 312, reputation: 9800, avatar: 'CN', online: false },
    { name: 'DevPro', posts: 276, reputation: 8500, avatar: 'DP', online: true }
  ];

  const news = [
    {
      id: 1,
      title: 'Релиз новой версии платформы',
      content: 'Мы рады представить версию 2.0 с улучшенным интерфейсом и новыми возможностями',
      date: '3 янв 2026',
      reactions: 245,
      comments: 67
    },
    {
      id: 2,
      title: 'Конкурс на лучший проект месяца',
      content: 'Участвуйте в конкурсе и выигрывайте ценные призы. Приём заявок до конца месяца',
      date: '2 янв 2026',
      reactions: 189,
      comments: 43
    },
    {
      id: 3,
      title: 'Техническое обслуживание серверов',
      content: 'Плановые работы пройдут 5 января с 02:00 до 04:00 по МСК. Возможны кратковременные перебои',
      date: '1 янв 2026',
      reactions: 56,
      comments: 12
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BlackRush Forum
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Home" size={18} />
                <span>Главная</span>
              </button>
              <button
                onClick={() => setActiveSection('users')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'users' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Users" size={18} />
                <span>Пользователи</span>
              </button>
              <button
                onClick={() => setActiveSection('news')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'news' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Newspaper" size={18} />
                <span>Новости</span>
              </button>
            </nav>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Активные обсуждения</h2>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Plus" size={18} className="mr-2" />
                Создать тему
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-muted">
                <TabsTrigger value="all">Все темы</TabsTrigger>
                <TabsTrigger value="popular">Популярные</TabsTrigger>
                <TabsTrigger value="recent">Недавние</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 mt-6">
                {topics.map((topic) => (
                  <Card
                    key={topic.id}
                    className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-[1.01] border-border hover:border-primary/50 cursor-pointer group"
                  >
                    <div className="flex gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {topic.title}
                          </h3>
                          <Badge variant="outline" className="border-accent text-accent whitespace-nowrap">
                            {topic.category}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="text-xs bg-gradient-to-br from-primary to-secondary text-white">
                                {topic.author.slice(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span>{topic.author}</span>
                          </div>
                          <span>•</span>
                          <span>{topic.time}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {topic.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted/80">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-2 text-primary">
                            <Icon name="Heart" size={16} />
                            <span className="font-medium">{topic.likes}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="MessageSquare" size={16} />
                            <span>{topic.replies}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Eye" size={16} />
                            <span>{topic.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'users' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Участники сообщества</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user) => (
                <Card
                  key={user.name}
                  className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] border-border hover:border-primary/50 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="text-lg bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {user.online && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-card" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="MessageSquare" size={14} />
                          <span>{user.posts} постов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Award" size={14} />
                          <span className="text-primary font-medium">{user.reputation} репутации</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Новости платформы</h2>
            <div className="space-y-4">
              {news.map((item) => (
                <Card
                  key={item.id}
                  className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-[1.01] border-border hover:border-accent/50 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <Badge variant="outline" className="border-accent text-accent">
                        {item.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    <div className="flex items-center gap-6 text-sm pt-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Icon name="ThumbsUp" size={16} />
                        <span className="font-medium">{item.reactions}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="MessageCircle" size={16} />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 BlackRush Forum. Все права защищены</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">Правила</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">API</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
