import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MovieRow } from './components/MovieRow';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Movies } from './components/Movies';
import { Series } from './components/Series';
import { ContentDetail } from './components/ContentDetail';
import { VideoPlayer } from './components/VideoPlayer';
import { MyList } from './components/MyList';

type View = 'login' | 'signup' | 'home' | 'movies' | 'series' | 'mylist';

export interface Content {
  id: number;
  title: string;
  imageUrl: string;
  type?: string;
  description?: string;
  year?: number;
  duration?: string;
  genre?: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [myList, setMyList] = useState<Content[]>([]);

  const heroContent: Content = {
    id: 999,
    title: 'Ciudad Nocturna',
    imageUrl: 'https://images.unsplash.com/photo-1673095288333-ac62dbbad575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzYxNDg4MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Una historia épica sobre secretos, traición y redención en las calles más oscuras de la ciudad. Cuando el pasado regresa, nada volverá a ser lo mismo.',
    type: 'Serie',
    year: 2024,
    duration: '8 episodios',
    genre: 'Drama, Thriller'
  };

  const trendingMovies: Content[] = [
    { id: 1, title: 'Acción Extrema', imageUrl: 'https://images.unsplash.com/photo-1739891251370-05b62a54697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjE0MzE0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Acción' },
    { id: 2, title: 'Thriller Oscuro', imageUrl: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwc2NlbmV8ZW58MXx8fHwxNzYxNDgwMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Thriller' },
    { id: 3, title: 'Drama Profundo', imageUrl: 'https://images.unsplash.com/photo-1715322608224-a9efaeeffaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFtYSUyMGNpbmVtYXxlbnwxfHx8fDE3NjE0ODMxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Serie', genre: 'Drama' },
    { id: 4, title: 'Comedia Loca', imageUrl: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjE0ODU4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Comedia' },
    { id: 5, title: 'Ciencia Ficción', imageUrl: 'https://images.unsplash.com/photo-1635698054698-1eaf72c5a894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbnxlbnwxfHx8fDE3NjE0NDQ0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Sci-Fi' },
    { id: 6, title: 'Noche de Terror', imageUrl: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYxNDU2NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Terror' },
  ];

  const popularMovies: Content[] = [
    { id: 7, title: 'Romance Eterno', imageUrl: 'https://images.unsplash.com/photo-1627964464837-6328f5931576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbW92aWUlMjBjb3VwbGV8ZW58MXx8fHwxNzYxNDA0MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Romance' },
    { id: 8, title: 'Naturaleza Salvaje', imageUrl: 'https://images.unsplash.com/photo-1603016129004-c7539f86b53f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMG5hdHVyZXxlbnwxfHx8fDE3NjE0NzM0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Documental', genre: 'Naturaleza' },
    { id: 9, title: 'Anime Épico', imageUrl: 'https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjE1MTIxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Anime', genre: 'Fantasía' },
    { id: 10, title: 'Aventura Extrema', imageUrl: 'https://images.unsplash.com/photo-1742201514090-5a173b9477ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmF2ZWwlMjBtb3VudGFpbnxlbnwxfHx8fDE3NjE1MTIxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Aventura' },
    { id: 11, title: 'Batalla Final', imageUrl: 'https://images.unsplash.com/photo-1739891251370-05b62a54697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjE0MzE0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Película', genre: 'Acción' },
    { id: 12, title: 'Misterio Profundo', imageUrl: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwc2NlbmV8ZW58MXx8fHwxNzYxNDgwMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'Serie', genre: 'Thriller' },
  ];

  const handleContentSelect = (content: Content) => {
    setSelectedContent(content);
    setIsPlaying(false);
  };

  const handlePlay = (content?: Content) => {
    if (content) {
      setSelectedContent(content);
    }
    setIsPlaying(true);
  };

  const handleCloseDetail = () => {
    setSelectedContent(null);
    setIsPlaying(false);
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
  };

  const handleAddToList = (content: Content) => {
    if (!myList.find(item => item.id === content.id)) {
      setMyList([...myList, content]);
    }
  };

  const handleRemoveFromList = (contentId: number) => {
    setMyList(myList.filter(item => item.id !== contentId));
  };

  const handleLogout = () => {
    setCurrentView('login');
    setMyList([]);
    setSelectedContent(null);
    setIsPlaying(false);
  };

  if (currentView === 'login') {
    return (
      <Login
        onLogin={() => setCurrentView('home')}
        onSwitchToSignUp={() => setCurrentView('signup')}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignUp
        onSignUp={() => setCurrentView('home')}
        onSwitchToLogin={() => setCurrentView('login')}
      />
    );
  }

  // Show video player
  if (isPlaying && selectedContent) {
    return <VideoPlayer content={selectedContent} onClose={handleClosePlayer} />;
  }

  // Show content detail
  if (selectedContent) {
    return (
      <ContentDetail
        content={selectedContent}
        onClose={handleCloseDetail}
        onPlay={handlePlay}
        onAddToList={handleAddToList}
        isInList={myList.some(item => item.id === selectedContent.id)}
      />
    );
  }

  if (currentView === 'movies') {
    return (
      <div className="min-h-screen bg-[#141414]">
        <Header currentPage="movies" onNavigate={(page) => setCurrentView(page as View)} onLogout={handleLogout} />
        <Movies onSelectContent={handleContentSelect} onAddToList={handleAddToList} myList={myList} />
      </div>
    );
  }

  if (currentView === 'series') {
    return (
      <div className="min-h-screen bg-[#141414]">
        <Header currentPage="series" onNavigate={(page) => setCurrentView(page as View)} onLogout={handleLogout} />
        <Series onSelectContent={handleContentSelect} onAddToList={handleAddToList} myList={myList} />
      </div>
    );
  }

  if (currentView === 'mylist') {
    return (
      <div className="min-h-screen bg-[#141414]">
        <Header currentPage="mylist" onNavigate={(page) => setCurrentView(page as View)} onLogout={handleLogout} />
        <MyList 
          myList={myList} 
          onSelectContent={handleContentSelect} 
          onRemoveFromList={handleRemoveFromList}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414]">
      <Header currentPage={currentView} onNavigate={(page) => setCurrentView(page as View)} onLogout={handleLogout} />
      <Hero content={heroContent} onPlay={() => handlePlay(heroContent)} />
      <div className="relative -mt-32">
        <MovieRow 
          title="Tendencias ahora" 
          movies={trendingMovies} 
          onSelectMovie={handleContentSelect}
          onAddToList={handleAddToList}
          myList={myList}
        />
        <MovieRow 
          title="Populares en Neflis" 
          movies={popularMovies} 
          onSelectMovie={handleContentSelect}
          onAddToList={handleAddToList}
          myList={myList}
        />
      </div>
    </div>
  );
}
