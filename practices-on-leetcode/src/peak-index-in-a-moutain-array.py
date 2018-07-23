#!/usr/local/bin/python3
# -*- coding: UTF-8 -*-

class Solution(object):
  def peakIndexInMountainArray(self, A):
    """
    :type A: list[int]
    :rtype: int
    """
    max = A[0]
    for i, v in enumerate(A):
      if max < v:
        max = v
      elif max > v:
        return i - 1

s = Solution()
print(s.peakIndexInMountainArray([1, 2, 3, 2, 1]))