import { FC } from 'react';
import { Link } from 'react-router-dom';

export const FeaturesPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">StockPulse AI Platform Features</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The StockPulse AI Platform offers a comprehensive suite of features designed to provide
        advanced stock analysis and trading capabilities. Explore the key components below.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Specialized AI Agents</h2>
          <p className="text-gray-600 mb-4">
            Our specialized AI agents leverage advanced patterns like ReAct, RAG, and Planning to provide
            comprehensive analysis across technical, fundamental, news, and alternative data domains.
          </p>
          <Link to="/features/ai-agents" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Explore AI Agents
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Trading Modules</h2>
          <p className="text-gray-600 mb-4">
            Specialized trading modules for day trading and positional trading, with real-time analysis,
            multi-timeframe support, and sophisticated risk management capabilities.
          </p>
          <Link to="/features/trading-modules" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Explore Trading Modules
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Natural Language Stock Screener</h2>
          <p className="text-gray-600 mb-4">
            Find stocks matching specific criteria using natural language queries, with support for
            technical, fundamental, sentiment, and alternative data filters.
          </p>
          <Link to="/features/stock-screener" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Explore Stock Screener
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Multi-Ticker Analysis</h2>
          <p className="text-gray-600 mb-4">
            Analyze multiple symbols simultaneously with correlation and comparison capabilities,
            powered by the Task Decomposition Engine and Agent Integration Manager.
          </p>
          <Link to="/features/multi-ticker-analysis" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Explore Multi-Ticker Analysis
          </Link>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Integration & Architecture</h2>
        <p className="text-gray-600 mb-6">
          All components of the StockPulse AI Platform are built on a modular, type-safe architecture
          that ensures extensibility, performance, and reliability. The Agent Integration Manager
          coordinates specialized agents for comprehensive analysis, while the shared type system
          ensures consistency across the platform.
        </p>
        <Link to="/documentation" className="text-blue-600 hover:underline">
          View Full Documentation →
        </Link>
      </div>
    </div>
  );
};
