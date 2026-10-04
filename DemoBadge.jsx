import React from 'react';

const styles = {
  "Built demo": "bg-green-100 text-green-800",
  "Portfolio project": "bg-blue-100 text-blue-800",
  "Demo concept": "bg-amber-100 text-amber-800",
};

export default function DemoBadge({ label }) {
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${styles[label] || 'bg-gray-100 text-gray-700'}`}>
      {label}
    </span>
  );
}
