export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🧳</em>
      </footer>
    );
  }

  const numitems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;

  const percentage = Math.round(
    numitems ? (numPackedItems / numitems) * 100 : 0
  );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 You got everything! Ready to Go ✈️"
          : `👜 You have ${numitems} items on your list, and you already packed
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
