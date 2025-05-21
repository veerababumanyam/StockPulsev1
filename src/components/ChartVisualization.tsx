import { FC } from 'react';

interface ChartVisualizationProps {
  type: 'line' | 'bar' | 'candlestick';
  title: string;
  description?: string;
}

export const ChartVisualization: FC<ChartVisualizationProps> = ({ type, title, description }) => {
  // This is a placeholder component that would be connected to a real charting library
  // like Recharts, Chart.js, or a financial charting library in a production environment
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      
      <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
        <div className="flex items-center justify-center h-64">
          {type === 'line' && (
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <path
                d="M 0,200 L 20,180 L 40,190 L 60,170 L 80,160 L 100,140 L 120,150 L 140,130 L 160,120 L 180,100 L 200,110 L 220,90 L 240,80 L 260,60 L 280,70 L 300,50 L 320,40 L 340,20 L 360,30 L 380,10 L 400,0"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
              />
            </svg>
          )}
          
          {type === 'bar' && (
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <rect x="10" y="50" width="30" height="150" fill="#3b82f6" />
              <rect x="50" y="80" width="30" height="120" fill="#3b82f6" />
              <rect x="90" y="20" width="30" height="180" fill="#3b82f6" />
              <rect x="130" y="60" width="30" height="140" fill="#3b82f6" />
              <rect x="170" y="100" width="30" height="100" fill="#3b82f6" />
              <rect x="210" y="30" width="30" height="170" fill="#3b82f6" />
              <rect x="250" y="70" width="30" height="130" fill="#3b82f6" />
              <rect x="290" y="110" width="30" height="90" fill="#3b82f6" />
              <rect x="330" y="40" width="30" height="160" fill="#3b82f6" />
              <rect x="370" y="90" width="30" height="110" fill="#3b82f6" />
            </svg>
          )}
          
          {type === 'candlestick' && (
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Candlestick 1 - Bullish */}
              <line x1="30" y1="20" x2="30" y2="60" stroke="black" strokeWidth="2" />
              <rect x="20" y="60" width="20" height="40" fill="#22c55e" />
              <line x1="30" y1="100" x2="30" y2="140" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 2 - Bearish */}
              <line x1="70" y1="30" x2="70" y2="70" stroke="black" strokeWidth="2" />
              <rect x="60" y="70" width="20" height="50" fill="#ef4444" />
              <line x1="70" y1="120" x2="70" y2="150" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 3 - Bullish */}
              <line x1="110" y1="40" x2="110" y2="80" stroke="black" strokeWidth="2" />
              <rect x="100" y="80" width="20" height="30" fill="#22c55e" />
              <line x1="110" y1="110" x2="110" y2="160" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 4 - Bearish */}
              <line x1="150" y1="20" x2="150" y2="50" stroke="black" strokeWidth="2" />
              <rect x="140" y="50" width="20" height="60" fill="#ef4444" />
              <line x1="150" y1="110" x2="150" y2="140" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 5 - Bullish */}
              <line x1="190" y1="30" x2="190" y2="70" stroke="black" strokeWidth="2" />
              <rect x="180" y="70" width="20" height="45" fill="#22c55e" />
              <line x1="190" y1="115" x2="190" y2="150" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 6 - Bullish */}
              <line x1="230" y1="50" x2="230" y2="90" stroke="black" strokeWidth="2" />
              <rect x="220" y="90" width="20" height="25" fill="#22c55e" />
              <line x1="230" y1="115" x2="230" y2="170" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 7 - Bearish */}
              <line x1="270" y1="30" x2="270" y2="60" stroke="black" strokeWidth="2" />
              <rect x="260" y="60" width="20" height="70" fill="#ef4444" />
              <line x1="270" y1="130" x2="270" y2="160" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 8 - Bullish */}
              <line x1="310" y1="40" x2="310" y2="80" stroke="black" strokeWidth="2" />
              <rect x="300" y="80" width="20" height="35" fill="#22c55e" />
              <line x1="310" y1="115" x2="310" y2="150" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 9 - Bearish */}
              <line x1="350" y1="20" x2="350" y2="50" stroke="black" strokeWidth="2" />
              <rect x="340" y="50" width="20" height="55" fill="#ef4444" />
              <line x1="350" y1="105" x2="350" y2="130" stroke="black" strokeWidth="2" />
              
              {/* Candlestick 10 - Bullish */}
              <line x1="390" y1="40" x2="390" y2="70" stroke="black" strokeWidth="2" />
              <rect x="380" y="70" width="20" height="40" fill="#22c55e" />
              <line x1="390" y1="110" x2="390" y2="160" stroke="black" strokeWidth="2" />
            </svg>
          )}
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Interactive {type} chart visualization would appear here</p>
          <p className="text-xs mt-1">(This is a placeholder for demonstration purposes)</p>
        </div>
      </div>
    </div>
  );
};
