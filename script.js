function create(select, all = false) {
    if (all) {
        const element = document.querySelectorAll(select);
        return element;

    }
    else {
        const element = document.querySelector(select);
        return element;
    }
}

const menu = create('.menu');
const hidden = create('.hiddden');
const wedesign = create('.wedesign');
const verbal = create('.verbal');
const img = create('#img');

const box2 = create('.box2', all = true);

box2.forEach((a) => {

    a.addEventListener('mouseenter', (e) => {

        const circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        circle.style.top = `${e.offsetY}px`;
        circle.style.left = `${e.offsetX}px`;
        circle.innerText = 'CASE STUDY';
        a.appendChild(circle);
    })

    a.addEventListener('mouseleave', () => {
        const cir = a.querySelector('.circle');
        a.removeChild(cir);

    })

    a.addEventListener('mousemove', (e) => {
        const bounding = a.getBoundingClientRect();
        const ey = e.clientY;
        const ex = e.clientX;
        const top = bounding.top;
        const left = bounding.left;
        const cir = a.querySelector('.circle');

        cir.style.top = `${ey - top}px`;
        cir.style.left = `${ex - left}px`;



    })


})




menu.addEventListener('click', () => {

    if (hidden.classList.contains('select')) {

        hidden.classList.remove('select');
        wedesign.classList.add('select');
        verbal.classList.add('select');
        menu.removeChild(img);
        menu.innerText = 'X';

    }
    else {

        hidden.classList.add('select');
        wedesign.classList.remove('select');
        verbal.classList.remove('select');
        menu.innerText = '';
        menu.appendChild(img);

    }


})