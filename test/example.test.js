// IMPORT MODULES under test here:
import { doesUserWin } from '../get-random-throw.js';

// IMPORT MODULES under test here:


const test = QUnit.test;

test('time to test USER function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test USER function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('paper', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test USER function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doesUserWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

