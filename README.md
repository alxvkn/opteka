# Импорты и ссылки
В связи с тем, что данный сайт должен корректно работать, будучи размещённым в
подпапке на бесплатном хостинге [Beget](https://beget.ru), к сожалению, использование абсолютных
ссылок невозможно. Поэтому все ссылки и строчки подключения CSS файлов и JS
скриптов используют относительные пути, а все страницы лежат в корне.

В JS модулях, однако, этого можно избежать, с помощью `import.meta.url`, как и делают все компоненты, загружая соседний файл template.html с помощью такой конструкции:
```js
const templatePromise = fetch(
    new URL('./template.html', import.meta.url)
).then(r => r.text())
```

# Компоненты
Для каждого компонента создаётся папка, в которой должен как минимум быть файл `element.js`.

Таким образом, для использования компонента с названием opteka-header, нужно:

1. Подключить скрипт по такому пути:
    ```html
    <script type="module" src="components/opteka-header/element.js"></script>
    ```

1. После чего использовать:
    ```html
    <opteka-header></opteka-header>
    ```

## Реализованы сейчас
- Глобальные
    - [opteka-header](./components/opteka-header)
    - [opteka-footer](./components/opteka-footer)
- Для каталога и избранного
    - [opteka-product-card](./components/opteka-product-card)
- Для корзины
    - [opteka-cart-item](./components/opteka-cart-item)
- Для админ панели
    - [admin-stats-view](./components/admin-stats-view/)
    - [admin-products-view](./components/admin-products-view)
        - [admin-product-card](./components/admin-product-card)
    - ~~[admin-orders-view](./components/admin-orders-view)~~ (В работе)
