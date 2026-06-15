class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map: Record<string, number> = {};

        for (let i = 0; i <= nums.length; i++) {
            let num = nums[i];

            if(map[`${num}`] >= 1) {return true};

            map[`${num}`] = (map[`${num}`] || 0) + 1;
        }

        return false
    }
}
