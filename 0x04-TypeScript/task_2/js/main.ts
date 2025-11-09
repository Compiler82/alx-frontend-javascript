type Subjects = 'Math' | 'History';

/**
 * A function that describes what is being taught based on the class subject.
 * @param todayClass - The subject being taught, restricted to 'Math' or 'History'.
 * @returns A string indicating the teaching action.
 */
function teachClass(todayClass: Subjects): string {
    // We use a switch statement to handle the specific String literal values.
    // Because todayClass is of type Subjects, the compiler knows the only two
    // possible cases are 'Math' and 'History'.
    switch (todayClass) {
        case 'Math':
            return 'Teaching Math';
        case 'History':
            return 'Teaching History';
        // Note: No default case is strictly necessary here because Subjects is a
        // closed union type, ensuring only 'Math' or 'History' are possible.
    }
}

// --- Example Usage and Verification ---
console.log(`teachClass('Math'): ${teachClass('Math')}`);
console.log(`teachClass('History'): ${teachClass('History')}`);
