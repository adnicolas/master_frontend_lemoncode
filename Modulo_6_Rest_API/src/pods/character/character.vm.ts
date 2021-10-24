export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  bestSentences: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  species: '',
  gender: '',
  status: '',
  bestSentences: [],
});
