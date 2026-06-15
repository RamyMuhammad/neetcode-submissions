class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        const mapS: Record<string, number> = {}
        const mapT: Record<string, number> = {}

        for (let i = 0; i <= s.length; i++) {
            let chart = s[i];

            if(mapS[chart]) {
                mapS[chart] = mapS[chart] + 1;
            } else {
                mapS[chart] = 1;
            }
        }

        for (let i = 0; i <= t.length; i++) {
            let chart = t[i];

            if(mapT[chart]) {
                mapT[chart] = mapT[chart] + 1;
            } else {
                mapT[chart] = 1;
            }
        }

        for (let i = 0; i <= s.length; i++) {
            let chart = s[i];

            if(Number(mapS[chart]) !== Number(mapT[chart])) return false;
        }

        return true;
    }
}
