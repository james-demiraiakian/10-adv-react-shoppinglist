import { useState } from 'react';

export default function Item({ item, onEdit, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  let content;

  if (!isEdit) {
    content = (
      <div>
        <button type="button" onClick={() => setIsEdit(true)}>
          Edit
        </button>
      </div>
    );
  } else {
    content = (
      <div>
        <input
          type="text"
          value={item.text}
          onChange={(e) => onEdit({ ...item, text: e.target.value })}
        />
        <button type="button" onClick={() => setIsEdit(false)}>
          Save
        </button>
      </div>
    );
  }

  return (
    <div>
      <span>{item.text}</span>
      {content}
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
