import { MovieRow } from './MovieRow';

interface Content {
  id: number;
  title: string;
  imageUrl: string;
  type?: string;
}

interface SeriesProps {
  onSelectContent: (content: Content) => void;
  onAddToList: (content: Content) => void;
  myList: Content[];
}

export function Series({ onSelectContent, onAddToList, myList }: SeriesProps) {
  const actionSeries = [
    { id: 701, title: 'Agentes Especiales', imageUrl: 'https://images.unsplash.com/photo-1693645325862-cf4fc2db0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBzZXJpZXMlMjBzY2VuZXxlbnwxfHx8fDE3NjE1MjA0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 702, title: 'Operación Roja', imageUrl: 'https://images.unsplash.com/photo-1602853445120-526f9be32e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBleHBsb3Npb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjE1MTk0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 703, title: 'Zona de Combate', imageUrl: 'https://images.unsplash.com/photo-1724529798256-874fbf79488c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBoZXJvJTIwZmlnaHR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 704, title: 'Fuerza Delta', imageUrl: 'https://images.unsplash.com/photo-1693645325862-cf4fc2db0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBzZXJpZXMlMjBzY2VuZXxlbnwxfHx8fDE3NjE1MjA0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 705, title: 'Comando Nocturno', imageUrl: 'https://images.unsplash.com/photo-1602853445120-526f9be32e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBleHBsb3Npb24lMjBtb3ZpZXxlbnwxfHx8fDE3NjE1MTk0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 706, title: 'Misión Imposible', imageUrl: 'https://images.unsplash.com/photo-1724529798256-874fbf79488c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBoZXJvJTIwZmlnaHR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
  ];

  const comedySeries = [
    { id: 801, title: 'Risas en Casa', imageUrl: 'https://images.unsplash.com/photo-1584695039819-4164ec9af8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjB0diUyMHNob3d8ZW58MXx8fHwxNzYxNTIwNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 802, title: 'Locos de Remate', imageUrl: 'https://images.unsplash.com/photo-1758525862263-af89b090fb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZW9wbGUlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NjE1MTk0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 803, title: 'Amigos Por Siempre', imageUrl: 'https://images.unsplash.com/photo-1649446801521-61ea6333f4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBmdW5ueSUyMGZpbG18ZW58MXx8fHwxNzYxNTE5NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 804, title: 'La Oficina', imageUrl: 'https://images.unsplash.com/photo-1584695039819-4164ec9af8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjB0diUyMHNob3d8ZW58MXx8fHwxNzYxNTIwNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 805, title: 'Vecinos', imageUrl: 'https://images.unsplash.com/photo-1758525862263-af89b090fb56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBwZW9wbGUlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NjE1MTk0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 806, title: 'Situaciones Cómicas', imageUrl: 'https://images.unsplash.com/photo-1649446801521-61ea6333f4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBmdW5ueSUyMGZpbG18ZW58MXx8fHwxNzYxNTE5NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
  ];

  const horrorSeries = [
    { id: 901, title: 'Sombras Oscuras', imageUrl: 'https://images.unsplash.com/photo-1676151941582-b58ff4d13c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjB0diUyMHNlcmllc3xlbnwxfHx8fDE3NjE1MjA0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 902, title: 'Pesadillas', imageUrl: 'https://images.unsplash.com/photo-1662414712336-12cb34792ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBzY2FyeSUyMGRhcmt8ZW58MXx8fHwxNzYxNTE5NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 903, title: 'La Casa Maldita', imageUrl: 'https://images.unsplash.com/photo-1650186278611-f626ec1bbad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnaG9zdCUyMGhhdW50ZWR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 904, title: 'Terror Nocturno', imageUrl: 'https://images.unsplash.com/photo-1676151941582-b58ff4d13c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjB0diUyMHNlcmllc3xlbnwxfHx8fDE3NjE1MjA0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 905, title: 'Espíritus', imageUrl: 'https://images.unsplash.com/photo-1662414712336-12cb34792ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBzY2FyeSUyMGRhcmt8ZW58MXx8fHwxNzYxNTE5NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 906, title: 'Más Allá del Miedo', imageUrl: 'https://images.unsplash.com/photo-1650186278611-f626ec1bbad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBnaG9zdCUyMGhhdW50ZWR8ZW58MXx8fHwxNzYxNTE5NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
  ];

  const animeSeries = [
    { id: 1001, title: 'Guerreros del Viento', imageUrl: 'https://images.unsplash.com/photo-1635417432032-60525731017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHNlcmllcyUyMHBvc3RlcnxlbnwxfHx8fDE3NjE1MjA0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1002, title: 'Leyendas de Tokio', imageUrl: 'https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2MTUxOTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1003, title: 'Academia de Héroes', imageUrl: 'https://images.unsplash.com/photo-1695747003335-ac77eeea43c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGFydHxlbnwxfHx8fDE3NjE0OTA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1004, title: 'Dragones Celestiales', imageUrl: 'https://images.unsplash.com/photo-1635417432032-60525731017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHNlcmllcyUyMHBvc3RlcnxlbnwxfHx8fDE3NjE1MjA0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1005, title: 'Samurai Cyber', imageUrl: 'https://images.unsplash.com/photo-1761129386720-82a53e04d9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwYW5pbWF0aW9ufGVufDF8fHx8MTc2MTUxOTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1006, title: 'Mundo Mágico', imageUrl: 'https://images.unsplash.com/photo-1695747003335-ac77eeea43c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGFydHxlbnwxfHx8fDE3NjE0OTA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
  ];

  const romanceSeries = [
    { id: 1101, title: 'Amor Verdadero', imageUrl: 'https://images.unsplash.com/photo-1683116574750-64b8cc6230d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRyYW1hJTIwc2VyaWVzfGVufDF8fHx8MTc2MTUyMDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1102, title: 'Corazones Unidos', imageUrl: 'https://images.unsplash.com/photo-1663428710477-c7c838be76b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbG92ZSUyMGNvdXBsZXxlbnwxfHx8fDE3NjE1MTk0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1103, title: 'Destinos Cruzados', imageUrl: 'https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwc3Vuc2V0JTIwY291cGxlfGVufDF8fHx8MTc2MTQxMDIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1104, title: 'Te Amaré Por Siempre', imageUrl: 'https://images.unsplash.com/photo-1683116574750-64b8cc6230d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRyYW1hJTIwc2VyaWVzfGVufDF8fHx8MTc2MTUyMDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1105, title: 'Promesas de Amor', imageUrl: 'https://images.unsplash.com/photo-1663428710477-c7c838be76b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbG92ZSUyMGNvdXBsZXxlbnwxfHx8fDE3NjE1MTk0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1106, title: 'Pasión Prohibida', imageUrl: 'https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwc3Vuc2V0JTIwY291cGxlfGVufDF8fHx8MTc2MTQxMDIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
  ];

  const fantasySeries = [
    { id: 1201, title: 'Reino de Dragones', imageUrl: 'https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWMlMjBkcmFnb258ZW58MXx8fHwxNzYxNTE5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1202, title: 'Los Magos', imageUrl: 'https://images.unsplash.com/photo-1686474057987-9b32824344f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWNhbHxlbnwxfHx8fDE3NjE0ODgzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1203, title: 'Crónicas de Narnia', imageUrl: 'https://images.unsplash.com/photo-1683660108375-ea3ee43e3c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzYxNDA3NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1204, title: 'El Reino Perdido', imageUrl: 'https://images.unsplash.com/photo-1610926597998-fc7f2c1b89b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWMlMjBkcmFnb258ZW58MXx8fHwxNzYxNTE5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1205, title: 'Hechiceros', imageUrl: 'https://images.unsplash.com/photo-1686474057987-9b32824344f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWNhbHxlbnwxfHx8fDE3NjE0ODgzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
    { id: 1206, title: 'Leyendas Místicas', imageUrl: 'https://images.unsplash.com/photo-1683660108375-ea3ee43e3c8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzYxNDA3NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', type: 'series' },
  ];

  return (
    <div className="min-h-screen bg-[#141414] pt-20 pb-12">
      <div className="px-4 md:px-12 mb-8">
        <h1 className="text-white mb-2">Series</h1>
        <p className="text-gray-400">Descubre las mejores series organizadas por categorías</p>
      </div>

      <div className="space-y-8">
        <MovieRow title="Acción" movies={actionSeries} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Comedia" movies={comedySeries} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Terror" movies={horrorSeries} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Anime" movies={animeSeries} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Romance" movies={romanceSeries} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
        <MovieRow title="Fantasía" movies={fantasySeries} onSelectMovie={onSelectContent} onAddToList={onAddToList} myList={myList} />
      </div>
    </div>
  );
}
