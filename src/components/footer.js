import React from 'react';
import '../App';

class Footer extends React.Component{
    render() {
        return(
            <footer>
                <div className="row low-footer-style justify-content-between">
                    <div>
                        All Rights Reserved.
                    </div>
                    <div>
                        Sponsored by NTUU "KPI"
                    </div>
                    <div>
                        <span>Мы в соцсетях:</span>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-viber"></i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;