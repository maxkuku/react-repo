export const CREATE_ANIMAL = 'CREATE_ANIMAL'


export const createAnimal = (animal) => ({
    type: CREATE_ANIMAL,
    payload: animal,
})

