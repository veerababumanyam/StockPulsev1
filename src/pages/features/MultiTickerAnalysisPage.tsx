import { FC } from 'react';
import { Link } from 'react-router-dom';

export const MultiTickerAnalysisPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Multi-Ticker Analysis Framework</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The StockPulse AI Platform includes a powerful Multi-Ticker Analysis Framework that enables efficient 
        analysis across multiple symbols simultaneously, with correlation and comparison capabilities.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Task Decomposition Engine</h2>
        <p className="text-gray-600 mb-4">
          The Task Decomposition Engine is the core component of the Multi-Ticker Analysis Framework, enabling 
          efficient processing of analysis tasks across multiple symbols.
        </p>
        <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li><strong>Parallel Processing:</strong> Distributes analysis tasks across multiple workers for efficient execution</li>
          <li><strong>Batch Processing:</strong> Efficiently processes groups of symbols with similar characteristics</li>
          <li><strong>Dynamic Resource Allocation:</strong> Optimizes resource usage based on task complexity and priority</li>
          <li><strong>Correlation Analysis:</strong> Identifies relationships between different symbols</li>
          <li><strong>Comparative Analysis:</strong> Provides side-by-side comparison of multiple symbols</li>
        </ul>
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h3 className="font-semibold mb-2">Implementation Highlights:</h3>
          <p className="text-sm text-gray-600">
            The Task Decomposition Engine uses advanced algorithms to break down complex analysis tasks into 
            smaller, manageable subtasks that can be processed in parallel. It includes sophisticated scheduling 
            and resource management to ensure optimal performance even with large symbol sets.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4">Correlation Analysis</h2>
          <p className="text-gray-600 mb-4">
            The Multi-Ticker Analysis Framework provides sophisticated correlation analysis capabilities to 
            identify relationships between different symbols.
          </p>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Price correlation across different timeframes</li>
            <li>Volume correlation and relative volume analysis</li>
            <li>Sector and industry correlation patterns</li>
            <li>Lead-lag relationship identification</li>
            <li>Correlation visualization and heatmaps</li>
          </ul>
          <p className="text-gray-600 mb-4">
            These capabilities help identify market relationships, sector rotations, and potential pairs trading opportunities.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <h2 className="text-2xl font-semibold mb-4">Comparative Analysis</h2>
          <p className="text-gray-600 mb-4">
            The framework enables detailed side-by-side comparison of multiple symbols across various metrics 
            and indicators.
          </p>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Technical indicator comparison</li>
            <li>Fundamental metric comparison</li>
            <li>Sentiment and news impact comparison</li>
            <li>Performance benchmarking</li>
            <li>Relative strength analysis</li>
          </ul>
          <p className="text-gray-600 mb-4">
            This comparative analysis helps identify outperformers and underperformers within sectors or custom watchlists.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
          <h2 className="text-2xl font-semibold mb-4">Sector and Industry Analysis</h2>
          <p className="text-gray-600 mb-4">
            The Multi-Ticker Analysis Framework includes specialized capabilities for analyzing sectors and 
            industries as a whole.
          </p>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Sector rotation identification</li>
            <li>Industry group strength analysis</li>
            <li>Sector breadth and market internals</li>
            <li>Relative performance against benchmarks</li>
            <li>Sector-specific sentiment analysis</li>
          </ul>
          <p className="text-gray-600 mb-4">
            These capabilities provide valuable context for individual stock analysis and help identify emerging trends.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
          <h2 className="text-2xl font-semibold mb-4">Portfolio Analysis</h2>
          <p className="text-gray-600 mb-4">
            The framework provides comprehensive portfolio analysis capabilities for evaluating and optimizing 
            groups of stocks.
          </p>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Portfolio risk assessment</li>
            <li>Correlation-based diversification analysis</li>
            <li>Portfolio optimization suggestions</li>
            <li>Performance attribution</li>
            <li>What-if scenario analysis</li>
          </ul>
          <p className="text-gray-600 mb-4">
            These capabilities help users build more balanced portfolios and understand the drivers of performance.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Agent Integration Manager</h2>
        <p className="text-gray-600 mb-6">
          The Agent Integration Manager coordinates the specialized AI agents to provide comprehensive analysis 
          across multiple symbols:
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li>Coordinates analysis requests across multiple agents</li>
          <li>Aggregates results from different analysis domains</li>
          <li>Resolves conflicts between different analysis perspectives</li>
          <li>Provides confidence scoring for aggregated insights</li>
          <li>Optimizes resource usage across the platform</li>
        </ul>
        <p className="text-gray-600 mb-4">
          This integration enables holistic market analysis across multiple symbols, timeframes, and data domains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/documentation#multi-ticker-analysis" className="text-blue-600 hover:underline">
            View Multi-Ticker Analysis Documentation →
          </Link>
          <Link to="/user-guide#multi-ticker-analysis" className="text-blue-600 hover:underline">
            See Multi-Ticker Analysis User Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};
