import React from 'react';
import '../App';

class Authorization extends React.Component{
    render() {
        return(
            <section>
                <form id="EnterType" className="form-authorization container-authorization">
                    <div>
                        <a href="" onClick="authorizationType(1)">Вход</a>
                        <a href="" onClick="authorizationType(2)">Регистрация</a>
                    </div>
                    <div id="AuthorizationType">
                        <div>
                            <div>
                                <label htmlFor="uname"><b>Логин</b></label>
                                <input type="text" placeholder="Введите логин" name="uname" required/>
                                    <label htmlFor="psw"><b>Пароль</b></label>
                                    <input type="password" placeholder="Введите пароль" name="psw" required/>
                                        <button className="button-authorization" type="submit">Login</button>
                                        <label>
                                            <input type="checkbox" checked="checked" name="remember"/> Запомнить меня
                                        </label>
                            </div>
                            <div className="row justify-content-around align-items-center">
                                <span className="psw">Забыли <a href="#">пароль?</a></span>
                            </div>
                        </div>
                    </div>
                </form>

                <form id="SignupType" className="form-authorization container-authorization">
                    <div>
                        <a onClick="authorizationType(1)">Вход</a>
                        <a onClick="authorizationType(2)">Регистрация</a>
                    </div>
                    <div className="">
                        <h1>Регистрация</h1>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Введите Email" name="email" required/>
                            <label htmlFor="psw"><b>Пароль</b></label>
                            <input type="password" placeholder="Введите пароль" name="psw" required/>
                                <label htmlFor="psw-repeat"><b>Повторите пароль</b></label>
                                <input type="password" placeholder="Повторите пароль" name="psw-repeat" required/>
                                    <label>
                                        <input type="checkbox" checked="checked" name="remember"
                                               /> Запомнить меня
                                    </label>
                                    <p>При регистрации Вы принимаете наши правила и лицензионное соглашение
                                        <a href="#" >Terms
                                        & Privacy</a>.
                                    </p>
                                    <div className="clearfix">
                                        <button type="submit" className="button-authorization">Зарегистрироваться
                                        </button>
                                    </div>
                    </div>
                </form>
            </section>

    );
    }
    }

    export default Authorization;