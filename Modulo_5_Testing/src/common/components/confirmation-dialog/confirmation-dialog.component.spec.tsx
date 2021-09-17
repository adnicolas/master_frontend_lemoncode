import * as React from 'react';
import { ConfirmationDialogProps, ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render } from '@testing-library/react';

describe('common/ConfirmationDialogComponent', () => {
  it('should be render as expected passing required properties', () => {
    // Arrange
    const props = {
        isOpen: true,
        title: 'ConfirmationDialogTest',
        labels: {
            closeButton: 'Cerrar',
            acceptButton: 'Aceptar'
        },
        onAccept: () => {},
        onClose: () => {}        
    } as ConfirmationDialogProps;

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText('ConfirmationDialogTest')).toBeInTheDocument();
  });
});
