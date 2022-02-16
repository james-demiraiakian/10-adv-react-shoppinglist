import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Renders and tests... everything', () => {
  render(<App />);

  const title = screen.getByText(/grocery list/i);
  expect(title).toBeInTheDocument();

  const addInput = screen.getByRole('textbox');
  expect(addInput).toBeInTheDocument();

  const addButton = screen.getByRole('button', { name: /add item/i });
  expect(addButton).toBeInTheDocument();

  const checkbox = screen.getByTestId('checkbox-0');
  expect(checkbox).toBeInTheDocument();

  const editButton = screen.getByTestId('edit-button-0');
  expect(editButton).toBeInTheDocument();

  const deleteButton = screen.getByTestId('delete-button-0');
  expect(deleteButton).toBeInTheDocument();

  userEvent.type(addInput, 'fruit');
  userEvent.click(addButton);
  const newItem = screen.getByText('fruit');
  expect(newItem).toBeInTheDocument();

  const newEditButton = screen.getByTestId('edit-button-3');
  expect(newEditButton).toBeInTheDocument();

  userEvent.click(newEditButton);
  const newEditInput = screen.getByTestId('edit-input-3');
  expect(newEditInput).toBeInTheDocument();

  const saveButton = screen.getByTestId('save-button-3');
  expect(saveButton).toBeInTheDocument();

  userEvent.type(newEditInput, '-orange');
  userEvent.click(saveButton);
  const editedItem = screen.getByText('fruit-orange');
  expect(editedItem).toBeInTheDocument();

  const newCheckbox = screen.getByTestId('checkbox-3');
  userEvent.click(newCheckbox);
  const editedItemChecked = screen.getByText('fruit-orange');
  setTimeout(() => {
    expect(editedItemChecked).toHaveStyle({ textDecoration: 'line-through' });
  }, 1);

  const newDeleteButton = screen.getByTestId('delete-button-3');
  userEvent.click(newDeleteButton);
  const removedItem = screen.queryByText('fruit-orange');
  expect(removedItem).toBeNull();
});
