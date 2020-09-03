const sum = (
  a: number,
  b: number,
  callback: (result: number, error: Error | null) => void,
) => {
  const ans = a + b;
  if (isNaN(ans) || !isFinite(ans)) {
    return callback(ans, new Error('NaN or Infinity'));
  }
  return callback(ans, null);
}

export default sum;
