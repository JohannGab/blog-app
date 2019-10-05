import React from 'react'
import './style.scss'

import BlogText from './BlogText'
import dataBlog from '../dataBlog.json'
import images from '../images/evian.png'
import images2 from '../images/badoit.jpg'
import images3 from '../images/volvic.png'



class SelectBlog extends React.Component {

state= {
    data : dataBlog,
    setTitle: dataBlog[0].title,
    setDescription: dataBlog[0].description,
    setAuthor: dataBlog[0].author,
    imgBlog: images3
}

titleData = () => {
    if (document.getElementById("select").value === "option1" ) {
    this.setState({
        setTitle: this.state.data[0].title,
        setDescription: this.state.data[0].description,
        setAuthor: this.state.data[0].author,
        imgBlog: images3
    })
} else if (document.getElementById("select").value === "option2" ) {
    this.setState({
        setTitle: this.state.data[1].title,
        setDescription: this.state.data[1].description,
        setAuthor: this.state.data[1].author,
        imgBlog: images
    })
} else if (document.getElementById("select").value === "option3" ) {
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

changeClick = () => {
    this.setState({ boom: ! this.state.boom })
}


render() {
    console.log(this.state.data);
    console.log(this.state.data[0].title);
    
    const {setTitle, setDescription, setAuthor, imgBlog} = this.state

    console.log(setTitle,"hello");
    console.log(this.state.boom);
    
    
    return (
    <>
    <div className="selectDiv">
        <select id="select" onChange={this.titleData}>
            <option value="">--Please choose an option--</option>
            <option value="option1" >{this.state.data[0].title}</option>
            <option value="option2">{this.state.data[1].title}</option>
            <option value="option3">{this.state.data[2].title}</option>
        </select>
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