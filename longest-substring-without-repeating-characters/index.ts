const lengthOfLongestSubstring = (s: string): number => {
  const sArr = s.split("");
  const map = new Map<string, number>();
  let start = 0;
  let end = 0;
  let max = 0;

  for (; end < sArr.length; end++) {
    const c = sArr[end];
    if (map.has(c)) {
      start = Math.max(map.get(c)!, start);
    }
    max = Math.max(max, end - start + 1);
    map.set(c, end + 1);
  }
  return max;
};

const result = lengthOfLongestSubstring("");
console.log(result);
