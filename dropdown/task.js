document.addEventListener('DOMContentLoaded', () => {

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdownElement => {
        const dropdownValue = dropdownElement.querySelector('.dropdown__value');
        const dropdownList = dropdownElement.querySelector('.dropdown__list');
        dropdownValue.addEventListener('click', (event) => {
            event.preventDefault();
            dropdownList.classList.toggle('dropdown__list_active');
        });

        const dropdownItems = dropdownElement.querySelectorAll('.dropdown__item');

        dropdownItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const link = item.querySelector('.dropdown__link');
                const selectedText = link.textContent;
                dropdownValue.textContent = selectedText;
                dropdownList.classList.remove('dropdown_list_active');

            });
        });

        // Рбработчик закрытия списка при клике мимо

        document.addEventListener('click', (event) => {
            if (!dropdownElement.contains(event.target)) {
                dropdownList.classList.remove('dropdown_list_active');
            }
        });
    });
});