function wordPatternMatch(pattern: string, s: string): boolean {
    // We'll need two maps for bijective mapping
    const charToStr = new Map<string, string>();
    const strToChar = new Map<string, string>();
    
    return backtrack(0, 0);
    
    // Helper function for backtracking
    function backtrack(pIndex: number, sIndex: number): boolean {
        // Base case: if both pattern and string are exhausted
        if (pIndex === pattern.length && sIndex === s.length) {
            return true;
        }
        
        // If either one is exhausted but not both, no match
        if (pIndex === pattern.length || sIndex === s.length) {
            return false;
        }
        
        // Get current pattern character
        const char = pattern[pIndex];
        
        // If we already have a mapping for this character
        if (charToStr.has(char)) {
            const str = charToStr.get(char)!;
            // Check if the string has enough characters left
            if (sIndex + str.length > s.length) {
                return false;
            }
            
            // Check if next substring matches our mapping
            const nextStr = s.substring(sIndex, sIndex + str.length);
            if (nextStr !== str) {
                return false;
            }
            
            // Continue matching with next character
            return backtrack(pIndex + 1, sIndex + str.length);
        }
        
        // Try each possible substring length
        for (let i = sIndex; i < s.length; i++) {
            const str = s.substring(sIndex, i + 1);
            
            // If this string is already mapped to another character
            if (strToChar.has(str)) {
                continue;
            }
            
            // Try this mapping
            charToStr.set(char, str);
            strToChar.set(str, char);
            
            // If it works with remaining pattern, we found a solution
            if (backtrack(pIndex + 1, i + 1)) {
                return true;
            }
            
            // Backtrack by removing the mapping
            charToStr.delete(char);
            strToChar.delete(str);
        }
        
        return false;
    }
}