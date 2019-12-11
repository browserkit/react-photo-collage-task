# React Photo Collage Task


## Image Props

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>number</td>
      <td>true</td>
    </tr>
    <tr>
      <td>height</td>
      <td>number</td>
       <td>true</td>
    </tr>
    <tr>
      <td>src</td>
      <td>string</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

## Component Props

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>number</td>
      <td>false</td>
      <td>800</td>
      <td>Ширина контейнера</td>
    </tr>   
    <tr>
      <td>maxRowHeight</td>
      <td>number</td>
      <td>false</td>
      <td>100</td>
      <td>Максимальная высота ряда</td>
    </tr>
    <tr>
        <td>inline</td>
        <td>bool</td>
        <td>false</td>
        <td>false</td>
        <td>Если true, то картинки выстраиваются в ряд без коллажа с возможностью перехода на новый ряд</td>
    </tr>   
    <tr>
        <td>onDrag</td>
        <td>function</td>
        <td>false</td>
        <td>undefined</td>
        <td>Если есть функция, то коллаж должен быть редактируемым. Появляеться drag-and-drop. После того как пользователь "отпустил" картинку, вызывается callback: ```(int oldIndex, int newIndex, Image image): void```</td>
    </tr>
    <tr>
        <td>margin</td>
        <td>number</td>
        <td>false</td>
        <td>2</td>
        <td>Отступ между картинками</td>
    </tr>
    <tr>
        <td>rows</td>
        <td>number or function</td>
        <td>false</td>
        <td>undefined</td>
        <td>Количество рядов или функция которая будет возвращать количество рядов. ```(int containerWidth): int```. По умолчанию автоматически определять равномерное количество изображений в ряд.</td>
    </tr>
    <tr>
      <td>images</td>
      <td>an array of Image</td>
      <td>true</td>
      <td>undefined</td>
      <td>Массив картинок. Тип картинки описан выше.</td>
    </tr>
  </tbody>
</table>

## Usage
```js
const props = {
  width: 800,
  maxRowHeight: 100,
  photos: [
    {
        width: 1024,
        height: 553,
        src: 'url/image-1.jpg',
    },
    {
        width: 483,
        height: 400,
        src: 'url/image-2.jpg',
    },
    {
        width: 500,
        height: 900,
        src: 'url/image-3.jpg',
    },
    ...
  ],
};

function App() {
  return (
    <ReactPhotoCollage {...props} />
  );
}
```
