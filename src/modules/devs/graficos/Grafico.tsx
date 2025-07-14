import { ResponsiveContainer } from 'recharts';

export function Grafico({ children, height = 300, className = '' }) {
  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
