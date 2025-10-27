// ===========================
// HOOK - CONTENIDO
// ===========================

import { useState, useEffect } from 'react';
import { contentService } from '../infrastructure/ContentService';
import { Content, ContentType } from '../../../shared/types';

export const useContent = () => {
  const [movies, setMovies] = useState<Content[]>([]);
  const [series, setSeries] = useState<Content[]>([]);
  const [featured, setFeatured] = useState<Content | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await contentService.getAllMovies();
      setMovies(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadSeries = async () => {
    setLoading(true);
    try {
      const data = await contentService.getAllSeries();
      setSeries(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadFeatured = async () => {
    try {
      const data = await contentService.getFeatured();
      setFeatured(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return {
    movies,
    series,
    featured,
    loading,
    error,
    loadMovies,
    loadSeries,
    loadFeatured,
  };
};
