function goToAnimalWorld(animal_id) {
    console.log(animal_id)
    if (animal_id != "null") {
        window.location.href = "/360-world?scene=" + animal_id
    }
}