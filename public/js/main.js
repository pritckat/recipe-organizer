const editButton = document.querySelector('#editRecipe')
if (editButton) {
    editButton.addEventListener('click', viewEditForm)
}

function viewEditForm() {
    const regular = document.querySelector('.regular')
    const form = document.querySelector('.updateForm')
    regular.toggleAttribute('hidden')
    form.toggleAttribute('hidden')
}

// to create: search for recipe feature, see random recipe
