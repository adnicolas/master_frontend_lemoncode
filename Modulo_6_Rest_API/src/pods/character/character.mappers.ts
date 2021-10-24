import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  status: character.status,
  gender: character.gender,
  species: character.species,
  name: character.name,
  bestSentences: character.bestSentences,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    status: character.status,
    species: character.species,
    gender: character.gender,
    name: character.name,
    bestSentences: character.bestSentences
  } as unknown) as apiModel.Character);
