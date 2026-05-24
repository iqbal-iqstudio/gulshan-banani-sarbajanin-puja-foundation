import React, { useEffect } from 'react';

export default function PageWrapper({ children, title }: { children: React.ReactNode; title?: string }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) {
      document.title = `${title} | GBSPF`;
    }
  }, [title]);

  return (
    <div className="pt-24 min-h-screen">
      {children}
    </div>
  );
}
