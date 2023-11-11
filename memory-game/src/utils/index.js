import { CARD_NAMES } from "../constants";

export function generateField() {
    // the size of the field is 4

    // pick 8 names from images randomly

    const shuffledCardNames = shuffleArray(Object.keys(CARD_NAMES));
    const pickedNames = shuffledCardNames.slice(0, 8);

    const duplicatedNames = [...pickedNames, ...pickedNames];

    const shuffledDuplicatedNames = shuffleArray(duplicatedNames);

    // create 2d array

    const field = [shuffledDuplicatedNames.slice(0, 4),
    shuffledDuplicatedNames.slice(4, 8),
    shuffledDuplicatedNames.slice(8, 12),
    shuffledDuplicatedNames.slice(12, 16)];
    
    return field;
}

function shuffleArray(unshuffled) {
    let shuffled = unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    
    return shuffled;
}