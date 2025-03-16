const links = document.querySelectorAll('.btn');

links.forEach(link => link.addEventListener('click', () => linkClicked(link)));

const linkClicked = (link) => {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = link.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}