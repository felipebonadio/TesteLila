export function shuffle(array: any[]) {
  return array.map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x);
}
