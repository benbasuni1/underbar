const each = (collection, iterator) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++)
      iterator(collection[i], i, collection);
  } else {
    for (let i in collection)
      iterator(collection[i], i, collection);
  }
}

const indexOf = (arr, target) => {
  let result = -1;

  each(arr, (item, index) => {
    if (item === target && result === -1)
      result = index;
  });

  return result;
}

const filter = (collection, test) => {
  let result = [];

  each(collection, elem => {
    if (test(elem)) results.push(elem);
  });

  return results;
}

const reject = (collection, test) => {
  return filter(collection, elem => {
    if (!test(elem)) return elem;
  });
};
