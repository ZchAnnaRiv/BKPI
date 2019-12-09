import React from 'react';
import '../App';


class AddItem extends React.Component{
    render() {
        return(
            <section>
                <div className="container">
                    <div className="add-item-form">
                        <form className="col form-add-item">
                            <div>
                                Добавить товар
                            </div>
                            <div>
                                Описание
                                <input type="text" name=""/>
                            </div>
                            <div>
                                <button className="upload-file">
                                    Загрузить фото
                                </button>
                            </div>
                            <div>
                                Цена
                                <input type="text" name=""/>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

    );
    }
}
export default AddItem;