class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups: string[][] = [];

        // key for anagram, number for array's group indexs
        const anagramIndex: Record<string, string> = {};

        const pushToGroup = (groupIndex: number, value: string): void => {
            if(groups[groupIndex] && groups[groupIndex].length > 0){
                groups[groupIndex].push(value)
            } else {
                groups[groupIndex] = [];
                groups[groupIndex].push(value)
            }
        };

        for (let i = 0; i < strs.length; i++) {

            const strCharsSorted = strs[i]
                .split("")
                .sort((a, b) => a.localeCompare(b))
                .join("");

            if (anagramIndex[strCharsSorted]) {
                pushToGroup(Number(anagramIndex[strCharsSorted]), strs[i])
            } else {
                anagramIndex[strCharsSorted] = groups.length.toString(); // add to last element in the array
                pushToGroup(Number(anagramIndex[strCharsSorted]), strs[i])
            }
        }


        return groups;
    }
}
