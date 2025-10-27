import { MovieRow } from './MovieRow';

interface Content {
  id: number;
  title: string;
  imageUrl: string;
  type?: string;
}

interface MoviesProps {
  onSelectContent: (content: Content) => void;
  onAddToList: (content: Content) => void;
  myList: Content[];
}

export function Movies({ onSelectContent, onAddToList, myList }: MoviesProps) {
  const actionMovies = [
    { id: 101, title: 'Explosive Force', imageUrl: 'https://images.unsplash.com/photo-1602853445120-526f9be32e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBleHBsb3Npb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjE1MTk0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 102, title: 'Hero Rising', imageUrl: 'https://images.unsplash.com/photo-1724529798256-874fbf79488c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBoZXJvJTIwZmlnaHR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 103, title: 'Thunder Strike', imageUrl: 'https://images.unsplash.com/photo-1739891251370-05b62a54697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjE0MzE0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 104, title: 'Steel Warrior', imageUrl: 'https://images.unsplash.com/photo-1602853445120-526f9be32e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBleHBsb3Npb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjE1MTk0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 105, title: 'Velocity', imageUrl: 'https://images.unsplash.com/photo-1724529798256-874fbf79488c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBoZXJvJTIwZmlnaHR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 106, title: 'Night Raid', imageUrl: 'https://images.unsplash.com/photo-1739891251370-05b62a54697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NjE0MzE0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const comedyMovies = [
    { id: 201, title: 'Laugh Out Loud', imageUrl: 'https://images.unsplash.com/photo-1649446801521-61ea6333f4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBmdW5ueSUyMGZpbG18ZW58MXx8fHwxNzYxNTE5NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 202, title: 'Happy Times', imageUrl: 'https://images.unsplash.com/photo-1758525862263-af89b090fb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZW9wbGUlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NjE1MTk0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 203, title: 'Funny Business', imageUrl: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjE0ODU4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 204, title: 'The Jokers', imageUrl: 'https://images.unsplash.com/photo-1649446801521-61ea6333f4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBmdW5ueSUyMGZpbG18ZW58MXx8fHwxNzYxNTE5NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 205, title: 'Smile Factory', imageUrl: 'https://images.unsplash.com/photo-1758525862263-af89b090fb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZW9wbGUlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NjE1MTk0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 206, title: 'Comedy Gold', imageUrl: 'https://images.unsplash.com/photo-1760007416920-7074ed2da3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBtb3ZpZXxlbnwxfHx8fDE3NjE0ODU4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const horrorMovies = [
    { id: 301, title: 'Dark Shadows', imageUrl: 'https://images.unsplash.com/photo-1662414712336-12cb34792ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBzY2FyeSUyMGRhcmt8ZW58MXx8fHwxNzYxNTE5NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 302, title: 'Haunted House', imageUrl: 'https://images.unsplash.com/photo-1650186278611-f626ec1bbad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnaG9zdCUyMGhhdW50ZWR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 303, title: 'Nightmare', imageUrl: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYxNDU2NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 304, title: 'The Darkness', imageUrl: 'https://images.unsplash.com/photo-1662414712336-12cb34792ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBzY2FyeSUyMGRhcmt8ZW58MXx8fHwxNzYxNTE5NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 305, title: 'Whispers', imageUrl: 'https://images.unsplash.com/photo-1650186278611-f626ec1bbad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnaG9zdCUyMGhhdW50ZWR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 306, title: 'Silent Scream', imageUrl: 'https://images.unsplash.com/photo-1630338679229-99fb150fbf88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBtb3ZpZSUyMGRhcmt8ZW58MXx8fHwxNzYxNDU2NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const animeMovies = [
    { id: 401, title: 'Neon Dreams', imageUrl: 'https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2MTUxOTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 402, title: 'Sakura Warriors', imageUrl: 'https://images.unsplash.com/photo-1695747003335-ac77eeea43c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGFydHxlbnwxfHx8fDE3NjE0OTA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 403, title: 'Dragon Spirit', imageUrl: 'https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2MTUxOTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 404, title: 'Tokyo Legends', imageUrl: 'https://images.unsplash.com/photo-1695747003335-ac77eeea43c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGFydHxlbnwxfHx8fDE3NjE0OTA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 405, title: 'Mystic Chronicles', imageUrl: 'https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2MTUxOTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 406, title: 'Cyber Samurai', imageUrl: 'https://images.unsplash.com/photo-1695747003335-ac77eeea43c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGFydHxlbnwxfHx8fDE3NjE0OTA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const romanceMovies = [
    { id: 501, title: 'Endless Love', imageUrl: 'https://images.unsplash.com/photo-1663428710477-c7c838be76b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbG92ZSUyMGNvdXBsZXxlbnwxfHx8fDE3NjE1MTk0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 502, title: 'Sunset Romance', imageUrl: 'https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwc3Vuc2V0JTIwY291cGxlfGVufDF8fHx8MTc2MTQxMDIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 503, title: 'Hearts Together', imageUrl: 'https://images.unsplash.com/photo-1627964464837-6328f5931576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbW92aWUlMjBjb3VwbGV8ZW58MXx8fHwxNzYxNDA0MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 504, title: 'Love Story', imageUrl: 'https://images.unsplash.com/photo-1663428710477-c7c838be76b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbG92ZSUyMGNvdXBsZXxlbnwxfHx8fDE3NjE1MTk0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 505, title: 'Forever Together', imageUrl: 'https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwc3Vuc2V0JTIwY291cGxlfGVufDF8fHx8MTc2MTQxMDIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 506, title: 'True Romance', imageUrl: 'https://images.unsplash.com/photo-1627964464837-6328f5931576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbW92aWUlMjBjb3VwbGV8ZW58MXx8fHwxNzYxNDA0MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const fantasyMovies = [
    { id: 601, title: 'Dragon Realm', imageUrl: 'https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWMlMjBkcmFnb258ZW58MXx8fHwxNzYxNTE5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 602, title: 'Castle of Legends', imageUrl: 'https://images.unsplash.com/photo-1683660108375-ea3ee43e3c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzYxNDA3NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 603, title: 'Magic Kingdom', imageUrl: 'https://images.unsplash.com/photo-1686474057987-9b32824344f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWNhbHxlbnwxfHx8fDE3NjE0ODgzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 604, title: 'Wizards Quest', imageUrl: 'https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWMlMjBkcmFnb258ZW58MXx8fHwxNzYxNTE5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 605, title: 'Enchanted Forest', imageUrl: 'https://images.unsplash.com/photo-1683660108375-ea3ee43e3c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzYxNDA3NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 606, title: 'Mythical Legends', imageUrl: 'https://images.unsplash.com/photo-1686474057987-9b32824344f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWNhbHxlbnwxfHx8fDE3NjE0ODgzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  return (
    <div className="min-h-screen bg-[#141414] pt-20 pb-12">
      <div className="px-4 md:px-12 mb-8">
        <h1 className="text-white mb-2">Películas</h1>
        <p className="text-gray-400">Explora nuestro catálogo completo organizado por categorías</p>
      </div>

      <div className="space-y-8">
        <MovieRow title="Acción" movies={actionMovies} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Comedia" movies={comedyMovies} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Terror" movies={horrorMovies} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Anime" movies={animeMovies} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Romance" movies={romanceMovies} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Fantasía" movies={fantasyMovies} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
      </div>
    </div>
  );
}
