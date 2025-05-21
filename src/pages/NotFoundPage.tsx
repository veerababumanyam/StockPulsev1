import { FC } from 'react';

export const NotFoundPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <a 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Return to Home
      </a>
    </div>
  );
};
