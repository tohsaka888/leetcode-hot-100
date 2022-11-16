/**
 * 只出现一次的数字
 * @date 11/16/2022 - 3:52:06 PM
 *
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = function (nums: number[]): number {
  const store: Record<string, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!store[num]) {
      store[num] = 1;
    } else {
      store[num]++;
    }
  }
  return +Object.keys(store).find((key) => store[key] === 1)!;
};

export default singleNumber;
