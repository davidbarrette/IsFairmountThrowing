import * as practice from './practice'

describe('practice Jest suite', () => {
    test('properlay adds two numbers', () => {
        expect(practice.sum(1, 2)).toBe(3)//1+2=3
    })
    
    test('clones the array', () => {
        const arr = [1,2,3]
        expect(practice.cloneArray(arr)).toEqual(arr)// look the same
        expect(practice.cloneArray(arr)).not.toBe(arr)//not the same memory address
    })
})


//Makes a suite to group them
/*
describe('my suite', () => {
    test('this is a test', () =>{
        ...
    })
    ...
});
*/

//test.only will run only that test (will run all tests
//with '.only', but only one test in a suite ('describe')
//can have the '.only' ('describe's can  have .only too)
//.skip to skip test or suite
//more
//https://codewithhugo.com/run-skip-single-jest-test/