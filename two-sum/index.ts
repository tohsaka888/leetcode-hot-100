/**
 * 两数之和
 * @date 2022-10-27
 * @param {any} nums:number[]
 * @param {any} target:number
 * @returns {any}
 */
const twoSum = (nums: number[], target: number) => {
  const store: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (store[target - item] !== undefined && store[target - item] !== i) {
      return [store[target - item], i];
    }
    store[item] = i;
  }

  return [];
};

const result = twoSum([3, 3], 6);
console.log(result);
