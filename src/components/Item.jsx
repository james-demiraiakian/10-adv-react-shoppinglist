export default function Item({ item, onEdit, onDelete }) {
  return (
    <div>
      <span>{item.text}</span>
    </div>
  );
}
