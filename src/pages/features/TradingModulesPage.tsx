import { FC } from 'react';
import { Link } from 'react-router-dom';

export const TradingModulesPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trading Modules</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The StockPulse AI Platform includes specialized trading modules designed for different trading styles and timeframes,
        providing comprehensive tools for strategy development, signal generation, and risk management.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
          <h2 className="text-2xl font-semibold mb-4">Day Trading Module</h2>
          <p className="text-gray-600 mb-4">
            The Day Trading Module focuses on short-term, intraday trading opportunities with real-time analysis
            and strict risk management controls.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Real-time market data analysis</li>
            <li>Intraday pattern recognition</li>
            <li>Short-term trading signal generation</li>
            <li>Strict risk management controls</li>
            <li>Performance tracking and analytics</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Implementation Highlights:</h4>
            <p className="text-sm text-gray-600">
              The Day Trading Module integrates with the Technical Analysis Agent for pattern recognition and
              uses real-time data processing for immediate signal generation. It includes configurable risk parameters
              and position sizing algorithms optimized for short-term trading.
            </p>
          </div>
          <Link to="/documentation#day-trading-module" className="text-blue-600 hover:underline">
            View Day Trading Module Documentation →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600">
          <h2 className="text-2xl font-semibold mb-4">Positional Trading Module</h2>
          <p className="text-gray-600 mb-4">
            The Positional Trading Module focuses on medium to long-term trading opportunities across multiple
            timeframes with sophisticated trend analysis and position management.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Multi-timeframe analysis and confirmation</li>
            <li>Trend identification and strength assessment</li>
            <li>Position sizing and risk-reward optimization</li>
            <li>Partial position management</li>
            <li>Long-term performance tracking</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h4 className="font-semibold mb-2">Implementation Highlights:</h4>
            <p className="text-sm text-gray-600">
              The Positional Trading Module leverages both Technical and Fundamental Analysis Agents for
              comprehensive market analysis. It includes sophisticated position sizing algorithms based on
              volatility and implements a multi-timeframe confirmation approach for signal validation.
            </p>
          </div>
          <Link to="/documentation#positional-trading-module" className="text-blue-600 hover:underline">
            View Positional Trading Module Documentation →
          </Link>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Trading Strategy Implementation</h2>
        <p className="text-gray-600 mb-4">
          Both trading modules are built on the BaseTradingModule framework, which provides common functionality
          for strategy implementation, signal processing, and risk management. The modules implement the TradingModule
          interface, ensuring consistent behavior and extensibility.
        </p>
        <h3 className="text-lg font-semibold mb-2">Key Components:</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li><strong>ComplexTradingStrategy</strong>: Implements sophisticated trading strategies with multiple conditions and filters</li>
          <li><strong>BacktestingEngine</strong>: Provides functionality to test strategies against historical data</li>
          <li><strong>PortfolioOptimizer</strong>: Optimizes position sizing and portfolio allocation</li>
        </ul>
        <Link to="/documentation#trading-strategy-implementation" className="text-blue-600 hover:underline">
          View Trading Strategy Documentation →
        </Link>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Integration with AI Agents</h2>
        <p className="text-gray-600 mb-6">
          The trading modules integrate with the specialized AI agents to leverage their analytical capabilities:
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li>Technical Analysis Agent provides pattern recognition and indicator analysis</li>
          <li>Fundamental Analysis Agent contributes valuation metrics and financial health assessment</li>
          <li>News Analysis Agent provides sentiment analysis and market impact assessment</li>
          <li>Alternative Data Analysis Agent contributes insights from non-traditional data sources</li>
        </ul>
        <p className="text-gray-600 mb-4">
          This integration enables comprehensive market analysis and more robust trading signals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/user-guide#trading-modules" className="text-blue-600 hover:underline">
            See Trading Modules User Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};
