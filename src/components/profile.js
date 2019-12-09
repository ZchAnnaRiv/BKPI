import React from 'react';
import '../App';

class Profile extends React.Component{
    render() {
        return(
            <section>
                <div className="container">
                    <div className="row profile justify-content-between">
                        <div className="profile-img">
                            <p><img id="profile-img" onClick="ScaleImage()" src="imgs/Avatar.jpg"/></p>
                        </div>
                        <div className="profile-info">
                            <p className="profile-name">Name Surname</p>
                            <div className="d-flex justify-content-between user-info-text">
                                <div>
                                    <p>Возраст:</p>
                                    <p>Номер:</p>
                                    <p>E-mail:</p>
                                    <p>Рейтинг:</p>
                                </div>
                                <div className="user-info">
                                    <p>20</p>
                                    <p>+38012345678</p>
                                    <p>name@gmail.com</p>
                                    <p>**** <a href="">5 отзывов</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Товары Name Surname</p>
                        <div className="row user-menu-items">
                            <div>
                                <img src="imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                            <div>
                                <img src="/imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                            <div>
                                <img src="imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                            <div>
                                <img src="imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                            <div>
                                <img src="imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                            <div>
                                <img src="imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                            <div>
                                <img src="imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                            <div>
                                <img src="imgs/beta.jpg"/>
                                    <p>price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
    }
}
export default Profile;