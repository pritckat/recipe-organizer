const editButton = document.querySelector('#editRecipe')
editButton.addEventListener('click', viewEditForm)

function viewEditForm() {
    const regular = document.querySelector('.regular')
    const form = document.querySelector('.updateForm')
    regular.toggleAttribute('hidden')
    form.toggleAttribute('hidden')
}