const exercises = {

    proste: [
        {
            text: 'Biały kot je z miski.',
            question: 'Jakiego koloru jest kot?',
            answers: ['czarny','biały','bury'],
            correctAnswer: 'biały'
        },
        {
            text: 'Czarny kot je z miski.',
            question: 'Jakiego koloru jest kot?',
            answers: ['czarny','biały','bury'],
            correctAnswer: 'czarny'
        },
        {
            text: 'Bury kot je z miski.',
            question: 'Jakiego koloru jest kot?',
            answers: ['czarny','biały','bury'],
            correctAnswer: 'bury'
        },
    ]

}

const polishReadingExercises = type => {
    return exercises[type]
}

export {polishReadingExercises}