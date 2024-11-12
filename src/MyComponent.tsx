import React from 'react';
import { cn } from './lib/utils.js';

export function MyComponent() {
  return (
    <div className={cn('p-6', 'bg-stone-900', 'rounded-lg')}>Hello world!</div>
  );
}
