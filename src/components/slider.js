import React from 'react';

/*
class Slider extends React.Component{
    state={
        changed: false,
        displayed: false,
        SlidesData: [
            {label: 'Конспект', liked: false, price: 200, description: "Превосходный товар",source: "/imgs/main_img.jpg", id: 1},
            {label: 'Конспект', liked: false, price: 200, description: "Превосходный товар",source: "/imgs/slide2.jpg", id: 2},
            {label: 'Конспект', liked: false, price: 200, description: "Превосходный товар",source: "/imgs/slider3.jpg", id: 3}

        ]
    }

    // Next/previous controls
    changeSlides = () => {
        this.setState(({changed}) => {
            return {
                changed: !changed,
            }})}

// Thumbnail image controls
    currentSlide = () => {
        const items = this.state.SlidesData;
        const item = items.map((item, index=(this.props.id-1)) => {
            return(
            )

            }

        )
    }

    render() {
        var i;
        var slideIndex = 1;
        let slides = this.state.SlidesData;
        let dots = document.getElementsByClassName("dot");
        let classNamess = 'main-img';
        if (this.state.displayed){
            classNamess += " displayed";
            alert("Hello");
        }
        return(
            <div className="slider" >
                <div className="main-text-img displayed">
                    <img src="/imgs/main-text-img.png"/>
                </div>
                <div className={classNamess}>
                    <img src="/imgs/main_img.jpg"/>
                </div>
                <div className={classNamess}>
                    <img src="imgs/slide2.jpg"/>
                </div>
                <div className={classNamess}>
                    <img alt="slider-image" src="imgs/slider3.jpg"/>
                </div>
                <div className="inline-btns">
                    <div className="slide-btns" >
                        <a className="prev-button" onClick={this.changeSlides}>&#10094;</a>
                    </div>
                    <div className="slide-btns">
                        <a className="next-button" onClick={this.changeSlides}>&#10095;</a>
                    </div>
                </div>
                <div className="dots" >
                    <span className="dot active" onClick={()=>this.currentSlide(1)}></span>
                    <span className="dot" onClick={()=>this.currentSlide(2)}></span>
                    <span className="dot" onClick={()=>this.currentSlide(3)}></span>
                </div>
            </div>

        );
    }
}
export default Slider;
*/
