import React from 'react'
import './style.scss'


const AddArticle = ({isOpen, isClose, handleChanges, handleSubmits, Title, Image, Description, Author}) => {
    
    return (
        <div className={isOpen ? 'newArticle' : 'CloseArticle' }>
            <div className="containerIs-open">
                <div className="divButtonClose">
                    <h4>Ajouter votre article <button onClick={isClose} className={"buttonClose"}>X</button></h4>
                </div>
            </div>
            <div className="containerIs-open1">
                <form onSubmit={handleSubmits}>
                    <div>
                        <input  className="inputModalSmall" type="text" value={Title} onChange={handleChanges} placeholder="title"></input>
                    </div>
                    <div>
                        <input  className="inputModalSmall" type="text" value={Image} onChange={handleChanges} placeholder="image"></input>
                    </div>
                    <div>
                        <input className="inputModalSmall" type="text" value={Author} onChange={handleChanges} placeholder="author"></input>
                    </div>
                    <div>
                        <textarea className="inputModal" type="text" value={Description} onChange={handleChanges} placeholder="description"></textarea>
                    </div>
                    <button type="submit" value="Submit">Envoyer votre article</button>
                </form>
            </div>
        </div>
    )
}

export default AddArticle