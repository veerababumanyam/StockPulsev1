import { FC } from 'react';
import { Link } from 'react-router-dom';

export const HomePage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">StockPulse AI Platform</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Advanced AI-powered stock analysis and trading platform with specialized agents, 
          trading modules, and comprehensive market insights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/documentation" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Documentation
          </Link>
          <Link 
            to="/user-guide" 
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            User Guide
          </Link>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Specialized AI Agents</h3>
            <p className="text-gray-600 mb-4">
              Advanced AI agents for technical, fundamental, news, and alternative data analysis.
            </p>
            <Link to="/features/ai-agents" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Trading Modules</h3>
            <p className="text-gray-600 mb-4">
              Specialized modules for day trading and positional trading strategies.
            </p>
            <Link to="/features/trading-modules" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Natural Language Stock Screener</h3>
            <p className="text-gray-600 mb-4">
              Find stocks matching specific criteria using natural language queries.
            </p>
            <Link to="/features/stock-screener" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Multi-Ticker Analysis</h3>
            <p className="text-gray-600 mb-4">
              Analyze multiple symbols simultaneously with correlation and comparison capabilities.
            </p>
            <Link to="/features/multi-ticker-analysis" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-12 md:py-16 bg-gray-50 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Platform Documentation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive documentation covering architecture, implementation details, and component interactions.
              </p>
              <Link to="/documentation" className="text-blue-600 hover:underline">
                View Documentation →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">User Guide</h3>
              <p className="text-gray-600 mb-4">
                Detailed guide for using all features of the StockPulse AI Platform.
              </p>
              <Link to="/user-guide" className="text-blue-600 hover:underline">
                View User Guide →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Final Report</h3>
              <p className="text-gray-600 mb-4">
                Executive summary, implementation highlights, and recommendations for future development.
              </p>
              <Link to="/final-report" className="text-blue-600 hover:underline">
                View Final Report →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Performance Evaluation</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive evaluation of system performance and scalability.
            </p>
            <Link to="/performance" className="text-blue-600 hover:underline">
              View Performance Evaluation →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Validation Checklist</h3>
            <p className="text-gray-600 mb-4">
              Detailed validation of all Phase 2 features and components.
            </p>
            <Link to="/validation" className="text-blue-600 hover:underline">
              View Validation Checklist →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
