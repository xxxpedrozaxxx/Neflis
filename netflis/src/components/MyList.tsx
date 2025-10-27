import { MovieRow } from './MovieRow';

interface Content {
  id: number;
  title: string;
  imageUrl: string;
  type?: string;
}

interface MyListProps {
  myList: Content[];
  onSelectContent: (content: Content) => void;
  onRemoveFromList: (contentId: number) => void;
}

export function MyList({ myList, onSelectContent, onRemoveFromList }: MyListProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="px-4 md:px-12 py-8">
        <h1 className="text-white mb-8">Mi Lista</h1>
        {myList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-gray-400 text-center mb-4">
              No tienes contenido en tu lista
            </p>
            <p className="text-gray-500 text-center">
              Agrega películas y series para verlas más tarde
            </p>
          </div>
        ) : (
          <MovieRow
            title={`${myList.length} ${myList.length === 1 ? 'título' : 'títulos'}`}
            movies={myList}
            onSelectMovie={onSelectContent}
            onRemoveFromList={onRemoveFromList}
            isMyListView={true}
          />
        )}
      </div>
    </div>
  );
}
