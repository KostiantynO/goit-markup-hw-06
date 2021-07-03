# goit-markup-hw-05 and # goit-markup-hw-06

Модуль 3. Вебинар 5. Блочная Модель:

=== Part 1 ===

- QnA.
- Бег впереди паровоза и домашние задания.
- Блочная модель элемента: content, padding, border, margin.
- Зачем использовать outline и фон.
- Свойства width и height. Высота только для декоративных элементов.
- Строчные и блочные элементы.
- Схлопывание вертикальных отступов.
- Выпадение вертикальных отступов. 2021-06-21 08:07. DONE.

=== Part 2 ===

- Модель визуального форматирования: box-sizing.
- Центрирование блочных элементов с margin auto: делаем div.container.
- Как на макете узнать ширину контейнера. Сетки и gutter, как это правильно читать.
- Вертикальное центрирование строчных элементов
- [Нормализация стилей](https://github.com/sindresorhus/modern-normalize) 2021-06-21 13:02. DONE.

- Практика flexbox и разбор макета студии
- селектор +
- многострочный контейнер в px, с -margin и надежный

html-css-22

- Фотореалистичные изображения JPG или PNG?
- Фон. [Допмат] background-origin и background-clip
- Многослойная картинка с прозрачным градиентом.
- Кнопка с иконкой, список с иконками (псевдоэлементы). [Допмат] (hhtps://habr.com/ru/post/154319/)
- [Кнопка-иконка](https://moderncss.dev/icon-button-css-styling-guide/)

html-css-22 Модуль 4. Вебинар №8. Векторная графика

- SVG как img и background-image
- Свойство fill
- Inline SVG. Размеры, CSS fill и currentColor.
- [stroke, width, linecap и dasharray] (http://css.yoksel.ru/svg-fill-and-stroke/)
- SVG-спрайт, символы и идентификатор фрагмента
- Иконошрифты
- [кнопка-иконка](https://moderncss.dev/icon-button-css-styling-guide/)

  1. export all svg from figma
  2. insert icons to sprite at icomoon
  3. import sprite to svgomg
  4. then inserted as inline svg everywhere. End!

<svg>
  <use href="https://sprite.svg#fragment"></use>
</svg>

Mission I'm possible for weekends - finish HW#6:

1. смотреть записи. DONE.
2. делать себе спрайтики. DONE.
3. ставить inline svg. DONE.
4. удалить width, hight, fill.\ auto via icomoon. DONE.
5. Add fill="currentColor" to icon-path inside and \*.svg sprite. Inherit fill for icons in
   shadowDOM through color: var(--color-accent) on svg. DONE.

<!--
backrgound-position: x смещение-x y смещение-y
backrgound-position: right 30px bottom 20px;
 -->
<!--
href="./contacts.html"
https://www.google.com"
https://developer.mozilla.org/ru/docs/web/css
https://stackoverflow.com/questions/tagged/css
-->

2021-07-01 18:05 Модуль 5. Вебинар №9. Позиционированные элементы

- Icons on the goods cards
  1. Goods card with icons relative to the card.
  2. Goods card with icons relative to the image and overlay.
  3. Fixed Header
  <!--
    <script>
      const { height: pageHeaderHeight } = document
      .querySelector(".page-header")
      .getBoundingClientRect();
      document.body.style
      .paddingTop = "${pageHeaderHeight}px";
    </script>
  -->
  4. Modal Window (https://fancyapps.com/fancybox/3/)
  5. Dropdown menus

menu-item posr > submenu posa. opacity=0 and visibility=visible / pointer events auto on hover.
