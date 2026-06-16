class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // The top frequent achieved count

        // The number
        // repeated count
        // frequent order

        type NumberCollectionType = {
            theNumber: number;
            arrayIndex: Record<number, number>;
            repeatedCount: number;
        };
        // Key her for the number
        const numbersCollection: Record<number, NumberCollectionType> = {};

        const reodrderTheNumber = (theNumber: number, arrayIndex: number): void => {
            if (numbersCollection[theNumber]) {
                if (numbersCollection[theNumber].arrayIndex[arrayIndex]) return;

                numbersCollection[theNumber].arrayIndex[arrayIndex] = arrayIndex;
                numbersCollection[theNumber].repeatedCount =
                    numbersCollection[theNumber].repeatedCount + 1;
            } else if (
                numbersCollection[theNumber] === null ||
                numbersCollection[theNumber] === undefined
            ) {
                numbersCollection[theNumber] = {
                    theNumber,
                    arrayIndex: {},
                    repeatedCount: 1,
                };

                numbersCollection[theNumber].arrayIndex[arrayIndex] = arrayIndex;
            }

            return;
        };

        for (let i = 0; i < nums.length; i++){
            reodrderTheNumber(nums[i], i)
        }

        const sortedNumbers: number[] = Object.values(numbersCollection)
            .sort((a, b) => b.repeatedCount - a.repeatedCount)
            .map((item) => item.theNumber);


        // The amount to return
        const mostFrequentList: number[] = []
        for (let i = 0; i < k; i++){
            mostFrequentList.push(sortedNumbers[i])
        }

        return mostFrequentList;
    }
}
