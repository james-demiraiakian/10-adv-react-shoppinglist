import { useState } from 'react';

export default function Item({ item, onEdit, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  let content;

  if (!isEdit) {
    content = (
      <>
        <button
          data-testid={`edit-button-${item.id}`}
          type="button"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      </>
    );
  } else {
    content = (
      <>
        <input
          data-testid={`edit-input-${item.id}`}
          type="text"
          value={item.text}
          onChange={(e) => onEdit({ ...item, text: e.target.value })}
        />
        <button
          data-testid={`save-button-${item.id}`}
          type="button"
          onClick={() => setIsEdit(false)}
        >
          Save
        </button>
      </>
    );
  }

  return (
    <div className="item-scale">
      <input
        type="checkbox"
        data-testid={`checkbox-${item.id}`}
        checked={item.done}
        onChange={(e) => onEdit({ ...item, done: e.target.value })}
      />

      <span className={item.done ? 'item-done' : ''}>{item.text}</span>
      {content}
      <button
        type="button"
        data-testid={`delete-button-${item.id}`}
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}
