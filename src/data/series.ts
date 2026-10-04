const seriesLabels: Record<string, string> = {
  leadership: 'Leadership',
  'behind-the-build': 'Behind the Build',
  'decision-velocity': 'Decision Velocity',
};

export function seriesLabel(series?: string): string | undefined {
  if (!series) return undefined;
  return seriesLabels[series] ?? series;
}
