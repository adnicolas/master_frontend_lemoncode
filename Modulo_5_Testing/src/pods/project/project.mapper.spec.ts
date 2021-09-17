import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';


describe('./pods/project', () => {
  it('should return empty project when feeding undefined project', () => {
    // Arrange
    const expectedResult: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    }
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(undefined);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty project when feeding null project', () => {
    // Arrange
    const expectedResult: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    }
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(null);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return one project when feeding one project', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Adrián',
      externalId: '666',
      comments: 'Lo que sea',
      isActive: true,
      employees: [{
        id: '4',
        isAssigned: true,
        employeeName: 'Pedro'
      }]
    };
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Adrián',
      externalId: '666',
      comments: 'Lo que sea',
      isActive: true,
      employees: [{
        id: '4',
        isAssigned: true,
        employeeName: 'Pedro'
      }]
    };
    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
