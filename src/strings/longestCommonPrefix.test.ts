import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
function longestCommonPrefix(strs: string[]): string {
  let i = 0
  let prefix = ""
  let maxLengthReached = false

  while (!maxLengthReached) {
    const currentLetter = strs[0][i]

    for (const s of strs) {
      const stringLetter = s[i]
      if (typeof stringLetter === 'undefined' || stringLetter !== currentLetter) {
        maxLengthReached = true
      }
    }

    if (!maxLengthReached) {
      prefix += currentLetter
    }

    i++
  }

  return prefix
};


describe("strings: longestCommonPrefix", () => {
  test("returns longest common prefix when there is one", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  })

  test("returns empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  })

  test("handles empty string input(s)", () => {
    expect(longestCommonPrefix([""])).toBe("")
    expect(longestCommonPrefix(["", ""])).toBe("")
  })
})