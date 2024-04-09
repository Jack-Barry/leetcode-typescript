import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const last = nums.pop()
    nums.unshift(last as number)
  }
};

describe("arrays: rotateArray", () => {
  test("handles array with odd length and odd k less than length", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    rotate(nums, 3)
    expect(nums).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  });

  test("handles array with even length and even k less than length", () => {
    const nums = [-1, -100, 3, 99]
    rotate(nums, 2)
    expect(nums).toStrictEqual([3, 99, -1, -100])
  })

  test("handles array with even length and odd k less than length", () => {
    const nums = [-1, -100, 3, 99]
    rotate(nums, 3)
    expect(nums).toStrictEqual([-100, 3, 99, -1])
  });


  test("handles array with even length and odd k more than length", () => {
    const nums = [1, 2]
    rotate(nums, 3)
    expect(nums).toStrictEqual([2, 1])
  })

  test("handles array with even length and even k more than length", () => {
    const nums = [1, 2]
    rotate(nums, 4)
    expect(nums).toStrictEqual([1, 2])
  })

  test("handles array with k equal to length", () => {
    const nums = [1, 2, 3]
    rotate(nums, 3)
    expect(nums).toStrictEqual([1, 2, 3])
  })

  test("handles no rotation", () => {
    const nums = [1, 2, 3]
    rotate(nums, 0)
    expect(nums).toStrictEqual([1, 2, 3])
  });
});