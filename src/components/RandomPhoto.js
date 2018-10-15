import React, { Component } from 'react'
import script_images from '../../script_images'
import Draggable from 'react-draggable'


export default class RandomPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zIndex: 0
        };
        this.newPicture = this.newPicture.bind(this);
        this.LEFT = Array.apply(null, Array(101)).map(()=>Math.random()*window.innerWidth/2); //Map doesn't work on ...Array because the pointers aren't assigned
        this.TOP = Array.apply(null, Array(101)).map(()=>Math.random()*window.innerHeight/2); //see above
    }

    newPicture() {
        const { zIndex } = this.state;
        this.setState({zIndex: zIndex+1})
    }

    componentDidMount() {
        requestAnimationFrame(() => { // The nested function is necessary for setInterval to work properly on Firefox. 
            requestAnimationFrame(() => {
                setInterval(()=>this.newPicture(), 5000)
            })})
    }



    render() {
        const { zIndex } = this.state;
        
        return (
            <div onClick={this.newPicture()} className="random-photo">
                <img src={require(`../../public/files/gimgs/1_background_twenties.jpg`)} /><br /><strong>Click and drag the images that appear</strong>
                {script_images.map((img, i) => {
                    return (
                        <div style={{
                            'position': 'absolute',
                            'z-index': `${i}`,
                            'left':`${this.LEFT[i]}px`,
                            'top':`${this.TOP[i]}px`,
                            'width': '450px',
                            'height': 'auto' 
                            }} key={i} className={zIndex >= i ? `display` : `nodisplay`}>
                            <Draggable>
                            <img src={require(`../../public/files/script_images/art/${img}`)} key={i} />
                            </Draggable>
                        </div>
                    )
                })}
            
            </div>
        )
    }
}



// const Picture = (props) =>  {

//     const { index, images , style} = props;
//     return (
//         <span style={}>
//             <img src={require(`../../public/files/script_images/art/${script_images_[index]}`)} />
//         </span>
//         )
// }





// Choose a random one, give it the style, and remove it from the array. Then rinse and repeat.