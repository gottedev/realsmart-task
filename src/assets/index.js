const arraySwapper = (source, destination, index) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(index, 1);
  destClone.splice(index, 0, removed);
  return [sourceClone, destClone];
};

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));

export { arraySwapper, getItems };
