import React from 'react';

export default class MenuItem extends React.Component{

    state = {
        liked: false,
    }
    onItemLike = () => {
        this.setState(({liked}) => {
            return{
                liked: !liked,
            }
        })
    }

    render() {
        const {label,price, description, id} = this.props;
        const {liked} = this.state;

        let classNames = "row justify-content-between";
        if (liked){
            classNames+= " liked";
        }

        return(
            <div className="col menu-item">
                <div className="menu-img-style">
                    <img src="imgs/beta.jpg" onDoubleClick={this.onItemLike}/>
                </div>
                <div className="menu-text-style">
                    <p>{label}</p>
                    <div className={classNames}>
                        <p>{price} грн</p>
                        <i className="fa fa-heart" onClick={this.onItemLike}></i>
                    </div>
                    <p className="describe-text">{description} $</p>
                </div>
            </div>
        );
    }

}
