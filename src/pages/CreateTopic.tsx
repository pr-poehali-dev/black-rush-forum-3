import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const CreateTopic = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const categories = [
    { value: 'news', label: 'Новости и объявления' },
    { value: 'chat', label: 'Общение' },
    { value: 'help', label: 'Помощь игрокам' },
    { value: 'reports', label: 'Жалобы и предложения' },
    { value: 'fractions', label: 'Фракции' },
    { value: 'market', label: 'Рынок' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !category) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Тема создана!",
      description: "Ваша тема успешно опубликована на форуме"
    });

    setTimeout(() => {
      navigate('/');
    }, 1500);
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
                Отмена
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
            <button onClick={() => navigate('/')} className="hover:text-gray-300">Форум</button>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Создать тему</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto p-8 bg-card border-border">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Icon name="PenSquare" size={32} className="text-primary" />
              Создать новую тему
            </h1>
            <p className="text-muted-foreground">Заполните форму, чтобы создать обсуждение на форуме</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-base">
                Раздел форума <span className="text-destructive">*</span>
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category" className="bg-background">
                  <SelectValue placeholder="Выберите раздел..." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-base">
                Заголовок темы <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Введите заголовок темы..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-background"
                maxLength={150}
              />
              <p className="text-xs text-muted-foreground">
                {title.length}/150 символов
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content" className="text-base">
                Содержание <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="content"
                placeholder="Опишите вашу тему подробно..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] bg-background"
              />
              <div className="flex gap-2 mt-2">
                <Button type="button" variant="outline" size="sm">
                  <Icon name="Bold" size={16} className="mr-1" />
                  Жирный
                </Button>
                <Button type="button" variant="outline" size="sm">
                  <Icon name="Italic" size={16} className="mr-1" />
                  Курсив
                </Button>
                <Button type="button" variant="outline" size="sm">
                  <Icon name="Link" size={16} className="mr-1" />
                  Ссылка
                </Button>
                <Button type="button" variant="outline" size="sm">
                  <Icon name="Image" size={16} className="mr-1" />
                  Изображение
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags" className="text-base">
                Теги (необязательно)
              </Label>
              <Input
                id="tags"
                placeholder="Введите теги через запятую: помощь, вопрос, новичок"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground">
                Теги помогают другим пользователям находить вашу тему
              </p>
            </div>

            <Card className="p-4 bg-muted/30 border-border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Icon name="Info" size={16} className="text-blue-500" />
                Правила создания тем
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Используйте понятные и информативные заголовки</li>
                <li>Описывайте проблему или вопрос подробно</li>
                <li>Не создавайте дубликаты существующих тем</li>
                <li>Соблюдайте правила форума и будьте вежливы</li>
                <li>Запрещен спам, реклама и оскорбления</li>
              </ul>
            </Card>

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 flex-1"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Опубликовать тему
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => navigate('/')}
              >
                Отмена
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default CreateTopic;
