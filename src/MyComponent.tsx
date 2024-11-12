import React from 'react';
import { cn } from './lib/utils.js';

export interface MyComponentProps {
  className?: string;
}

export function MyComponent({ className }: MyComponentProps) {
  return (
    <div className={cn('p-6 bg-stone-900 rounded-lg', className)}>
      Hello world!
    </div>
  );
}
