import React from 'react'
import './style.scss'

import BlogText from './BlogText'
import dataBlog from '../dataBlog.json'
import images from '../images/evian.png'
import images2 from '../images/badoit.jpg'
import images3 from '../images/volvic.png'
import AddArticle from '../components/AddArticle'



class SelectBlog extends React.Component {

state= {
    data : dataBlog,
    setTitle: [],
    setDescription:[],
    setAuthor: [],
    imgBlog: [],
    modal: false,
    valueText: ''
}


titleData = () => {
    if (document.getElementById("select").value === this.state.data[0].title ) {
    this.setState({
        setTitle: this.state.data[0].title,
        setDescription: this.state.data[0].description,
        setAuthor: this.state.data[0].author,
        imgBlog: images3
    })
} else if (document.getElementById("select").value === this.state.data[1].title ) {
    this.setState({
        setTitle: this.state.data[1].title,
        setDescription: this.state.data[1].description,
        setAuthor: this.state.data[1].author,
        imgBlog: images
    })
} else if (document.getElementById("select").value === this.state.data[2].title ) {
    this.setState({
        setTitle: this.state.data[2].title,
        setDescription: this.state.data[2].description,
        setAuthor: this.state.data[2].author,
        imgBlog: images2
    })
} else {
    return "Article en cours..."
}

}

newArticle = () => {
    this.setState({ modal: !this.state.modal})
}

closeModal = () => {
    this.setState({ modal: !this.state.modal})
}

handleChange = (event) => {
    this.setState({ valueText: event.target.value });
}

handleSubmit = (event) => {
    alert(`L'article a été soumis : ` + this.state.valueText);
    event.preventDefault();
}


render() {
    const {setTitle, setDescription, setAuthor, imgBlog, data, modal} = this.state

    
    return (
    <>
    <div className="selectDiv">
        <select id="select" onChange={this.titleData}>
            <option value="option">Choissisez votre article ici</option>
            {data.map(datas => (
                <option value={datas.title} key={datas.id}>
                    {datas.title}
                </option>))}
        </select>
        <button 
            onClick={this.newArticle}
            className="buttonAddArticle"
            >Ajouter un article
        </button>
        <div className="containerModal">
            <AddArticle 
            isOpen={modal}
            isClose={this.closeModal}
            handleChanges={this.handleChange}
            handleSubmits={this.handleSubmit}
            valueTextBlog={this.state.valueText}
            />
        </div>
        </div> 
        <BlogText 
        title={setTitle}
        images={imgBlog}
        description={setDescription}
        author={setAuthor}
        />
    </>
    )
}
}

export default SelectBlog