import * as React from 'react';
import Gallery from './components/Gallery';

const imagesList = [
    {src: '../assets/imgs/img1.jpg'},
    {src: '../assets/imgs/img2.jpg'},
    {src: '../assets/imgs/img3.jpg'},
    {src: '../assets/imgs/img4.jpg'},
    {src: '../assets/imgs/img5.jpg'},
    {src: '../assets/imgs/img6.png'},
    {src: '../assets/imgs/img7.jpg'},
    {src: '../assets/imgs/img8.jpg'},
    {src: '../assets/imgs/img9.jpg'},
    {src: '../assets/imgs/img10.jpg'}
]

class App extends React.Component<{}> {
    onDragHendler(oldIndex, newIndex, image){
        console.log(oldIndex, newIndex, image)
    }

    render() {
        return (
            <div className="container">
                <Gallery images={imagesList} margin={10} width={1024} rows={3} maxRowHeight={400} onDrag={this.onDragHendler}/>
            </div>
        );
    }
}

export default App;