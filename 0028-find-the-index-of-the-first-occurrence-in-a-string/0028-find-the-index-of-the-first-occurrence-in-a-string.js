/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (needle.length > haystack.length) return -1;
    return KMPSearch(needle, haystack)
};

function computeLPSArray(pat, M, lps)
{
    var len = 0;
    var i = 1;
    lps[0] = 0; // lps[0] is always 0
 
    while (i < M) {
        if (pat.charAt(i) == pat.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        }
        else // (pat[i] != pat[len])
        {
            if (len != 0) {
                len = lps[len - 1];
            }
            else // if (len == 0)
            {
                lps[i] = len;
                i++;
            }
        }
    }
}
 
function KMPSearch(pat,txt)
{
    var M = pat.length;
    var N = txt.length;
 
    // create lps[] that will hold the longest
    // prefix suffix values for pattern
    var lps = [];
    var j = 0; // index for pat[]
 
    // Preprocess the pattern (calculate lps[]
    // array)
    computeLPSArray(pat, M, lps);
 
    var i = 0; // index for txt[]
    while ((N - i) >= (M - j)) {
        if (pat.charAt(j) == txt.charAt(i)) {
            j++;
            i++;
        }
        if (j == M) {
          return (i - j)
            // document.write("Found pattern " + "at index " + (i - j) + "\n");
            // j = lps[j - 1];
        }
 
        // mismatch after j matches
        else if (i < N && pat.charAt(j) != txt.charAt(i)) {
            // Do not match lps[0..lps[j-1]] characters,
            // they will match anyway
            if (j != 0)
                j = lps[j - 1];
            else
                i = i + 1;
        }
    }
    return -1;
}