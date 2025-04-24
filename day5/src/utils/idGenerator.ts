let currentId = 0;

export const generateId = (): number => {
  return ++currentId;
}

