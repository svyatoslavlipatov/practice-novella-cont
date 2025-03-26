// Шрифт для текста
AFRAME.registerComponent('custom-font', {
    init: function () {
    this.el.setAttribute('font', 'msdf/pixel/pix-msdf.json');
    this.el.setAttribute('font-image', 'msdf/pixel/pix.png');
    this.el.setAttribute('negate', 'false');
    }
});

// Компонент кнопки
AFRAME.registerComponent('button', {
    schema: {
    value: { type: 'string', default: '' },
    position: { type: 'vec3', default: { x: 0, y: 1, z: 0 } }
    },
    init: function () {
    const el = this.el;
    const data = this.data;

    // Создаём плоскость
    const plane = document.createElement('a-plane');
    plane.setAttribute('width', '3');
    plane.setAttribute('height', '0.3');
    plane.setAttribute('color', '#00CC00');
    plane.setAttribute('hoverable', '');

    // Создаём текст
    const text = document.createElement('a-text');
    text.setAttribute('value', data.value);
    text.setAttribute('custom-font', ''); // Используем компонент custom-font
    text.setAttribute('align', 'center');
    text.setAttribute('color', 'white');
    text.setAttribute('position', '0 0 0.01');
    text.setAttribute('width', '3');
    text.setAttribute('scale', '0.8 0.8 0.8');

    // Добавляем элементы в сущность
    el.appendChild(plane);
    el.appendChild(text);
    el.setAttribute('position', data.position);
    }
});

// Компонент текста
AFRAME.registerComponent('dialog-text', {
    schema: {
    value: { type: 'string', default: '' },
    position: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
    },
    init: function () {
    const el = this.el;
    const data = this.data;

    // Добавляем шрифт через компонент 
    el.setAttribute('custom-font', '');

    // Остальные общие атрибуты
    el.setAttribute('color', '#FFFFFF');
    el.setAttribute('align', 'left');
    el.setAttribute('anchor', 'left');
    el.setAttribute('baseline', 'top');
    el.setAttribute('width', '3.5');
    el.setAttribute('scale', '1 1 1');
    el.setAttribute('wrapcount', '50');
    el.setAttribute('alpha-test','5')

    // Уникальные атрибуты
    el.setAttribute('value', data.value);
    el.setAttribute('position', data.position);
    }
});

// Компонент для эффекта наведения
AFRAME.registerComponent('hoverable', {
    init: function () {
    var el = this.el;
    el.addEventListener('mouseenter', function () {
        el.setAttribute('color', '#005F7F');
    });
    el.addEventListener('mouseleave', function () {
        el.setAttribute('color', '#008CBA');
    });
    }
});

AFRAME.registerComponent('play-video-on-click', {
    init: function () {
    var el = this.el; // Ссылка на сущность (portal1)
    var video = document.querySelector('#rpo-video-code'); // Ссылка на видео элемент
    
    // Добавляем обработчик события клика
    el.addEventListener('click', function () {
        // Проверяем, существует ли видео элемент
        if (video) {
        // Запускаем воспроизведение видео
        video.components.material.data.src.play();
        }
    });
    }
});