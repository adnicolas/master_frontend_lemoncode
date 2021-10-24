import { Character } from './character.api-model';

import { mockCharacterCollection } from './characters.mock-data';
export const getCharacter = async (id: string): Promise<Character> => {
  //return mockCharacterCollection.find((ch) => ch.id.toString() === id);
  return fetch(`http://localhost:3000/characters/${id}`, {
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

export const saveCharacter = async (character: Character): Promise<boolean> => {
  //return true;
  return fetch(`http://localhost:3000/characters/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res.json()
  });
};
