import { ReactNode, CSSProperties } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export function AnimatedSection({ children, className = '', delay = 0, style }: AnimatedSectionProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
