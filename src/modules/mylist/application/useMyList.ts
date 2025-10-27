// ===========================
// HOOK - MI LISTA
// ===========================

import { useState, useEffect } from 'react';
import { myListService } from '../infrastructure/MyListService';
import { Content } from '../../../shared/types';

export const useMyList = () => {
  const [myList, setMyList] = useState<Content[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMyList = async () => {
    setLoading(true);
    try {
      const data = await myListService.getMyList();
      setMyList(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addToList = async (contentId: string) => {
    try {
      await myListService.addToList(contentId);
      await loadMyList(); // Recargar lista
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const removeFromList = async (contentId: string) => {
    try {
      await myListService.removeFromList(contentId);
      setMyList(myList.filter(item => item.id !== contentId));
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const isInList = (contentId: string): boolean => {
    return myList.some(item => item.id === contentId);
  };

  useEffect(() => {
    loadMyList();
  }, []);

  return {
    myList,
    loading,
    error,
    addToList,
    removeFromList,
    isInList,
    reload: loadMyList,
  };
};
