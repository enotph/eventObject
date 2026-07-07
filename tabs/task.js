function initTabs() {
    const tabNavigations = document.querySelectorAll('.tab__navigation');

    tabNavigations.forEach((navigation) => {
        navigation.addEventListener('click', (event) => {
            const clickedTab = event.target.closest('.tab');

            if (!clickedTab) return;

            const tabsContainer = navigation.closest('.tabs') || navigation.parentElement

            switchTab(tabsContainer, clickedTab);
        });
    });
}

function switchTab(container, activeTab) {
    const navigation = container.querySelector('.tab__navigation');
    const contentWrapper = container.querySelector('.tab__contents');

    if (!navigation || !contentWrapper) return;

    const tabs = Array.from(navigation.querySelectorAll('.tab'));
    const contents = Array.from(contentWrapper.querySelectorAll('.tab__content'));

    const index = tabs.indexOf(activeTab);

    if (index === -1 || activeTab.classList.contains('tab_active')) return;

    tabs.forEach(tab => tab.classList.remove('tab_active'));
    contents.forEach(content => content.classList.remove('tab__content_active'));

    activeTab.classList.add('tab_active');

    if (contents[index]) {
        contents[index].classList.add('tab__content_active');
    }
}

document.addEventListener('DOMContentLoaded', initTabs);


