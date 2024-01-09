class Solution {
    public boolean isAnagram(String s, String t) {
        char[] str = s.toCharArray();
        Arrays.sort(str);
        String strSorted = new String(str);
        char[] strs = t.toCharArray();
        Arrays.sort(strs);
        String strsSorted = new String(strs);
        boolean result = strSorted.equals(strsSorted);
        return result;
    }
}