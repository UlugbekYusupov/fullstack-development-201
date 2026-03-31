function generateId(collection) {
  if (collection.length === 0) {
    return 1;
  }
  return collection[collection.length - 1].id + 1;
}

export default generateId;