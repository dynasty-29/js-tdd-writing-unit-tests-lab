// Your tests here
import {isPalindrome} from "../utils";

describe ("isPalindrome", () =>{
    it("should return true for a palidrome word", ()=>{
        const word = "racecar";
        const result = isPalindrome(word);
        expect(result).toBe(true);
    });
    it("should return false for a non-palindrome word", () => {
        const word = "car";
        const result = isPalindrome(word);
        expect(result).toBe(false);
    });

    it("should return true for a single-character string", () => {
        const word = "a";
        const result = isPalindrome(word);
        expect(result).toBe(true);
    });

    it("should return true for an empty string", () => {
        const word = "";
        const result = isPalindrome(word);
        expect(result).toBe(true);
    });

    it("should be case insensitive", () => {
        const word = "RaceCar";
        const result = isPalindrome(word);
        expect(result).toBe(true);
    });
});
