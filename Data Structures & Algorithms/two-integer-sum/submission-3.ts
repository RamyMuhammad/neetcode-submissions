class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // {number (number value from array): [number (number value from array), number (number index in array)]}
        const map: Record<number, [number, number]> = {};

        for (let i = 0; i <= nums.length; i++){
            const value = nums[i];
            map[Number(value)] = [Number(value), Number(i)];
        }

        for (let i = 0; i <= nums.length; i++){
            const value = nums[i];
            const diff = target - value;

            if(map[Number(diff)]) {
                const valueArr = map[Number(diff)];

                if(Number(valueArr[1]) === Number(i)) continue;

                return [i, valueArr[1]];
            }
        }

        return [0,0]
    }
}
