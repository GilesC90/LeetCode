var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length -(k % nums.length)))
};