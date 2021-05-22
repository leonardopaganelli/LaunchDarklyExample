const splitBy = (size, list) => {
  return list.reduce((acc, curr, i, self) => {
    if (!(i % size)) {
      return [...acc, self.slice(i, i + size)];
    }
    return acc;
  }, []);
};

export default splitBy;
