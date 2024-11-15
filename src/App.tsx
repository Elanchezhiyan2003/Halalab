import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold">Welcome to Halal_Lab!</h2>
        <p className="mt-4 text-gray-700">
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
