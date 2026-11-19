import { useEffect } from 'react';

/**
 * Keeps the title of the browser tab in sync with the page being shown.
 *
 * @param title - The full title, including the name of the app.
 */
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
