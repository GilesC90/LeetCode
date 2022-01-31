/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

/** 
Runtime: 79 ms, faster than 87.33% of JavaScript online submissions for Two Sum.
Memory Usage: 42.3 MB, less than 9.52% of JavaScript online submissions for Two Sum.
Date: 1/31/2022
Name: Bailey Kau
*/

var twoSum = function(nums, target) {
    const HashMap = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diff in HashMap) {
                return [HashMap[diff], i];
            }
            HashMap[nums[i]] = i;
        }
};
