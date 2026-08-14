import type { ReactNode } from 'react';

type PageFrameProps = {
  children: ReactNode;
};

const PageFrame = ({ children }: PageFrameProps) => (
  <div className="min-h-screen bg-white">
    <main id="main" className="pt-16">
      {children}
    </main>
  </div>
);

export default PageFrame;
