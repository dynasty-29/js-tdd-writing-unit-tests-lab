// Your code here
export function isPalindrome(word){
    const orgWord = word.toLowerCase();

    const revWord = orgWord.split('').reverse().join('');

    return orgWord === revWord;
};
