'use client';

import { useState } from 'react';
import { SavedLaptop, ChatMessage } from '@/lib/interfaces/interfaces';

export const useLaptopHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveLaptopToHistory = async (laptop: SavedLaptop, newMessages: ChatMessage[] = []) => {
    try {
      setIsLoading(true);
      setError(null);

      // Ensure all required fields are present
      const laptopToSave = {
        ...laptop,
        specs: laptop.specs || {
          processor: 'N/A',
          ram: 'N/A',
          storage: 'N/A',
          display: 'N/A'
        },
        pros: laptop.pros || [],
        cons: laptop.cons || [],
        summary: laptop.summary || `${laptop.name} - A powerful laptop by ${laptop.brand}`,
        shoppingLinks: laptop.shoppingLinks || [],
        chatMessages: [...(laptop.chatMessages || []), ...newMessages],
        createdAt: laptop.createdAt || new Date(),
        updatedAt: new Date()
      };

      const response = await fetch('/api/laptops/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(laptopToSave),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save laptop');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save laptop';
      setError(errorMessage);
      console.error('Error saving laptop:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    saveLaptopToHistory,
    isLoading,
    error
  };
}; 