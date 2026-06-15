class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Record<string, number[]> = {};

        for (let i = 0; i < strs.length; i++){
            const strCharsSorted = strs[i].split("")
                .sort((a, b) => a.localeCompare(b))
                .join("");
            
            if(map[strCharsSorted]) {
                map[strCharsSorted][i] = i
            } else {
                map[strCharsSorted] = []
                map[strCharsSorted][i] = i
            }
        }

        
        const group: string[][] =[]

        Object.keys(map).forEach((key) => {
            const strIndxList: number[] = map[key];
            
            const anagramGroup: string[] = [];

            strIndxList.forEach((strIndx: number) => {
                anagramGroup.push(strs[strIndx])
            })

            group.push(anagramGroup)
        });

        return group;
    }
}
