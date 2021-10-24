import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return fetch(`http://localhost:3000/characters`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res.json()
  });
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  let characterCollection = [];
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
