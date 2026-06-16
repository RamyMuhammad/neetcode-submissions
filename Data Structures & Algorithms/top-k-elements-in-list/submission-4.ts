class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // key: number (3), count (43)
        const numberCountMap: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const theNumber = nums[i];

            if (numberCountMap[theNumber]) {
                numberCountMap[theNumber] = numberCountMap[theNumber] + 1;
            } else {
                numberCountMap[theNumber] = 1;
            }
        }

        // key: counts (43), number [3,4]
        const countNumbersMap: Record<number, number[]> = {};

        Object.keys(numberCountMap).forEach((key) => {
            const count = numberCountMap[key];

            if (!countNumbersMap[count]) {
                countNumbersMap[count] = [];
            }
            countNumbersMap[count].push(Number(key));
        });

        // sort the count from highest to lowest & list the top frequent limited to `k`
        const topk = Object.entries(countNumbersMap)
            .sort(([a], [b]) => Number(b) - Number(a))
            .flatMap(([, values]) => values)
            .slice(0, k)



        return topk;
    }
}
