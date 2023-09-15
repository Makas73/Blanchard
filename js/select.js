const element = document.querySelector('#filter');
const choices = new Choices(element, {

    itemSelectText: '',
    searchChoices: false,
    shouldSort: false,
    renderChoiceLimit: 3,
    removeItemButton: false,
});
