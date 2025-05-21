import { FC } from 'react';
import { Link } from 'react-router-dom';

export const StockScreenerPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Natural Language Stock Screener</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The StockPulse AI Platform features a powerful Natural Language Stock Screener that allows users to find 
        stocks matching specific criteria using natural language queries instead of complex filter configurations.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Natural Language Query Processing</h2>
        <p className="text-gray-600 mb-4">
          The Natural Language Screening Agent processes conversational queries and translates them into 
          precise screening criteria across multiple data domains.
        </p>
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h3 className="font-semibold mb-2">Example Queries:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>"Find tech stocks with strong momentum and positive sentiment"</li>
            <li>"Show me undervalued healthcare companies with low debt and growing revenue"</li>
            <li>"Which energy stocks have bullish chart patterns and increasing institutional ownership?"</li>
            <li>"List small-cap stocks with high social media engagement and recent price breakouts"</li>
          </ul>
        </div>
        <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li>Natural language understanding and intent recognition</li>
          <li>Query decomposition into specific screening criteria</li>
          <li>Context-aware parameter interpretation</li>
          <li>Ambiguity resolution and clarification</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4">Technical Filters</h2>
          <p className="text-gray-600 mb-4">
            The screener supports a comprehensive set of technical analysis filters for identifying
            stocks based on price action, volume, and chart patterns.
          </p>
          <h3 className="text-lg font-semibold mb-2">Available Filters:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Price relative to moving averages (SMA, EMA)</li>
            <li>Technical indicator values (RSI, MACD, Bollinger Bands)</li>
            <li>Volume patterns and anomalies</li>
            <li>Chart pattern detection (e.g., breakouts, reversals)</li>
            <li>Volatility and momentum metrics</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <h2 className="text-2xl font-semibold mb-4">Fundamental Filters</h2>
          <p className="text-gray-600 mb-4">
            The screener includes extensive fundamental analysis filters for identifying
            stocks based on financial metrics and company characteristics.
          </p>
          <h3 className="text-lg font-semibold mb-2">Available Filters:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Valuation metrics (P/E, P/B, P/S, EV/EBITDA)</li>
            <li>Growth metrics (Revenue growth, EPS growth)</li>
            <li>Profitability metrics (Profit margin, ROE, ROA)</li>
            <li>Dividend metrics (Yield, Payout ratio, Growth)</li>
            <li>Balance sheet metrics (Debt/Equity, Current ratio)</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
          <h2 className="text-2xl font-semibold mb-4">Sentiment Filters</h2>
          <p className="text-gray-600 mb-4">
            The screener incorporates sentiment analysis filters based on news, analyst opinions,
            and market sentiment indicators.
          </p>
          <h3 className="text-lg font-semibold mb-2">Available Filters:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>News sentiment (positive, negative, neutral)</li>
            <li>Analyst rating changes and consensus</li>
            <li>Insider trading activity</li>
            <li>Institutional ownership changes</li>
            <li>Earnings surprise and guidance</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
          <h2 className="text-2xl font-semibold mb-4">Alternative Data Filters</h2>
          <p className="text-gray-600 mb-4">
            The screener leverages alternative data sources to provide unique filtering
            capabilities beyond traditional metrics.
          </p>
          <h3 className="text-lg font-semibold mb-2">Available Filters:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Social media sentiment and engagement</li>
            <li>Web traffic trends and digital presence</li>
            <li>Mobile app download and usage metrics</li>
            <li>ESG (Environmental, Social, Governance) scores</li>
            <li>Supply chain and logistics data</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Integration with AI Agents</h2>
        <p className="text-gray-600 mb-6">
          The Natural Language Stock Screener integrates with all specialized AI agents to leverage their
          analytical capabilities:
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          <li>Technical Analysis Agent provides pattern recognition and indicator calculations</li>
          <li>Fundamental Analysis Agent contributes financial metrics and valuation analysis</li>
          <li>News Analysis Agent provides sentiment analysis and market impact assessment</li>
          <li>Alternative Data Analysis Agent contributes insights from non-traditional data sources</li>
        </ul>
        <p className="text-gray-600 mb-4">
          This integration enables comprehensive screening across multiple data domains with a simple natural language interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/documentation#stock-screener" className="text-blue-600 hover:underline">
            View Stock Screener Documentation →
          </Link>
          <Link to="/user-guide#stock-screener" className="text-blue-600 hover:underline">
            See Stock Screener User Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};
