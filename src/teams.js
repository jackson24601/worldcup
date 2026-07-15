export const TEAMS = [
  { id: 'england', name: 'England', flagCode: 'gb-eng' },
  { id: 'usa', name: 'USA', flagCode: 'us' },
  { id: 'france', name: 'France', flagCode: 'fr' },
  { id: 'mexico', name: 'Mexico', flagCode: 'mx' },
  { id: 'japan', name: 'Japan', flagCode: 'jp' },
  { id: 'australia', name: 'Australia', flagCode: 'au' },
  { id: 'brazil', name: 'Brazil', flagCode: 'br' },
  { id: 'argentina', name: 'Argentina', flagCode: 'ar' },
];

export function flagUrl(flagCode) {
  return `https://flagcdn.com/w160/${flagCode}.png`;
}
