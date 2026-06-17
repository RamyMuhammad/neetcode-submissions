class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    private encryptionChar = ":/:";

    encode(strs: string[]): string {
        if(strs.length === 0) return 'null';

        let encrypted = "";

        for (let i = 0; i < strs.length; i++) {
            const strVaule = strs[i];

            if (strVaule.length > 0) {
                for (let j = 0; j < strVaule.length; j++) {
                    encrypted = encrypted + strVaule[j];
                }
            }

            if (i < strs.length - 1) {
                encrypted = encrypted + this.encryptionChar;
            }
        }

        console.log("encrypted", encrypted);

        return encrypted;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str === 'null') return [];

        return str.split(this.encryptionChar).filter((value) => value != this.encryptionChar);
    }
}
