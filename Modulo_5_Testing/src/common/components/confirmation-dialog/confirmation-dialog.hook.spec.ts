import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useConfirmationDialog', () => {
    it ('should return an object with isOpen false and empty itemToDelete', () => {
        // Arrange
        const expectedItemToDelete: Lookup = createEmptyLookup();
        // Act
        const { result } = renderHook(() => useConfirmationDialog());

        // Assert
        expect(result.current.isOpen).toBe(false);
        expect(result.current.onClose).toEqual(expect.any(Function));
        expect(result.current.onAccept).toEqual(expect.any(Function));
        expect(result.current.onOpenDialog).toEqual(expect.any(Function));
        expect(result.current.itemToDelete).toEqual(expectedItemToDelete);

    });
    it ('should update isOpen and itemToDelete when it calls onOpenDialog/onClose/onOpenDialog/onAccept', () => {
        // Arrange
        const newItemToDelete: Lookup = {
            id: '1', name: 'Adrián'
        };
        const emptyItem: Lookup = createEmptyLookup();

        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        act(() => {
            result.current.onOpenDialog(newItemToDelete);
        });

        // Assert
        expect(result.current.isOpen).toBe(true);
        expect(result.current.itemToDelete).toEqual(newItemToDelete);

        // Act
        act(() => {
            result.current.onClose();
        });

        // Assert
        expect(result.current.isOpen).toBe(false);

        // Act
        act(() => {
            result.current.onOpenDialog(newItemToDelete);
        });
        act(() => {
            result.current.onAccept();
        });

        // Assert
        expect(result.current.itemToDelete).toEqual(emptyItem);
    })
})
