import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const TopicView = () => {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const [replyText, setReplyText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'DarkCoder',
      avatar: 'DC',
      userGroup: 'Модератор',
      posts: 234,
      reputation: 8900,
      joined: 'Янв 2024',
      content: 'Всем привет! Хочу обсудить важную тему по настройке production окружения. Какие подходы вы используете для деплоя?\n\nЛично я предпочитаю использовать Docker + CI/CD, но интересно узнать ваше мнение.',
      time: '2 часа назад',
      likes: 12,
      isFirstPost: true
    },
    {
      id: 2,
      author: 'ReactMaster',
      avatar: 'RM',
      userGroup: 'Участник',
      posts: 189,
      reputation: 7200,
      joined: 'Мар 2024',
      content: 'Согласен с Docker! Также рекомендую настроить мониторинг через Prometheus + Grafana. Очень удобно отслеживать состояние системы.',
      time: '1 час назад',
      likes: 8,
      isFirstPost: false
    },
    {
      id: 3,
      author: 'Helper_Alex',
      avatar: 'HA',
      userGroup: 'Хелпер',
      posts: 445,
      reputation: 12300,
      joined: 'Дек 2023',
      content: 'Не забывайте про бэкапы! Я использую автоматические снапшоты каждые 6 часов. Спасло не раз.',
      time: '30 минут назад',
      likes: 5,
      isFirstPost: false
    }
  ]);

  const topic = {
    title: 'Как правильно настроить production окружение?',
    category: 'Технические вопросы',
    views: 1283,
    replies: posts.length - 1,
    tags: ['production', 'deployment', 'devops']
  };

  const handleReply = () => {
    if (!replyText.trim()) return;
    
    const newPost = {
      id: posts.length + 1,
      author: 'Вы',
      avatar: 'ВЫ',
      userGroup: 'Новичок',
      posts: 1,
      reputation: 10,
      joined: 'Янв 2026',
      content: replyText,
      time: 'Только что',
      likes: 0,
      isFirstPost: false
    };

    setPosts([...posts, newPost]);
    setReplyText('');
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
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
              <Button 
                variant="ghost" 
                className="text-gray-400 hover:text-white hover:bg-gray-800"
                onClick={() => navigate('/')}
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                К разделам
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Icon name="LogIn" size={16} className="mr-2" />
                Вход
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-red-950/30 to-orange-950/30 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Icon name="Home" size={14} />
            <span className="text-gray-500">/</span>
            <button onClick={() => navigate('/')} className="hover:text-gray-300">{topic.category}</button>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">{topic.title}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Eye" size={16} />
                  <span>{topic.views} просмотров</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageSquare" size={16} />
                  <span>{topic.replies} ответов</span>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="border-accent text-accent">
              {topic.category}
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {topic.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="bg-card border-border overflow-hidden">
              <div className="grid md:grid-cols-[200px_1fr]">
                <div className="bg-muted/30 p-4 border-r border-border">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="text-lg bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-foreground">{post.author}</h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs mt-1 ${
                          post.userGroup === 'Модератор' ? 'border-red-600 text-red-600' : 
                          post.userGroup === 'Хелпер' ? 'border-green-600 text-green-600' : 
                          'border-gray-600 text-gray-600'
                        }`}
                      >
                        {post.userGroup}
                      </Badge>
                    </div>
                    <Separator />
                    <div className="w-full space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Сообщений:</span>
                        <span className="font-semibold text-foreground">{post.posts}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Репутация:</span>
                        <span className="font-semibold text-primary">{post.reputation}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Регистрация:</span>
                        <span className="font-semibold text-foreground">{post.joined}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={14} />
                      <span>{post.time}</span>
                    </div>
                    {post.isFirstPost && (
                      <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                        Автор темы
                      </Badge>
                    )}
                  </div>

                  <div className="prose prose-sm max-w-none mb-4">
                    <p className="text-foreground whitespace-pre-wrap leading-relaxed">{post.content}</p>
                  </div>

                  <Separator className="my-3" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => handleLike(post.id)}
                      >
                        <Icon name="ThumbsUp" size={16} className="mr-1" />
                        {post.likes > 0 && <span className="text-xs">{post.likes}</span>}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Icon name="Quote" size={16} className="mr-1" />
                        Цитировать
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <Icon name="Share2" size={16} className="mr-1" />
                        Поделиться
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                      <Icon name="Flag" size={16} className="mr-1" />
                      Пожаловаться
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6 p-6 bg-card border-border">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="MessageSquare" size={20} className="text-primary" />
            Ответить в теме
          </h3>
          <Textarea 
            placeholder="Напишите свой ответ..." 
            className="min-h-[150px] mb-4 bg-background"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Bold" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Italic" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Link" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Image" size={16} />
              </Button>
            </div>
            <Button 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              onClick={handleReply}
            >
              <Icon name="Send" size={16} className="mr-2" />
              Отправить ответ
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default TopicView;
