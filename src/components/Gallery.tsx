import * as React from "react";
import * as ReactDOM from "react-dom";
import * as dragula from 'react-dragula'

interface listItem {src: string; width?: number; height?: number};

interface GalleryProps { 
    images: listItem[]; 
    width?: number; 
    maxRowHeight?: number; 
    inline?: boolean; 
    margin?: number; 
    rows?: number; 
    onDrag?: (oldIndex: any, newIndex: any, image: any) => void
}

let oldIndex = 0,
    element = '';

class Gallery extends React.Component<GalleryProps, {}> {
    componentDidMount(){
        if(this.props.onDrag){
            let gallery = ReactDOM.findDOMNode(this);

            let drake = dragula([gallery], {
                moves: function(el, source, handle, sibling){
                    let currentItem = handle.parentElement,
                        nodes = document.getElementsByClassName('gallery__item'),
                        nodesList = Array.prototype.slice.call( nodes );
                        
                        oldIndex = nodesList.indexOf(currentItem);
                        element = handle;

                    return true;
                }
            });

            drake.on('dragend', (el)=>{
                let nodes = document.getElementsByClassName('gallery__item'),
                nodesList = Array.prototype.slice.call( nodes ),
                currentIndex = nodesList.indexOf(el);

                this.props.onDrag(oldIndex, currentIndex, element);
            })
        }
    }

    render() {
        
        return (
            <div className="gallery" style={{maxWidth: this.props.width, columnGap: this.props.margin, columnCount: this.props.inline ? 'auto' : this.props.rows}}>
                {this.props.images.map((item, i) => {
                    return(
                        <div key={i} className="gallery__item" style={{marginBottom: this.props.margin, width: this.props.inline ? 100 / this.props.rows + '%' : '100%', cursor: this.props.onDrag ? 'move' : 'default'}}>
                            <img src={item.src} style={{maxHeight: this.props.maxRowHeight}} alt="image"/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Gallery;