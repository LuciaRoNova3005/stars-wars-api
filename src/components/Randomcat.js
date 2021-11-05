import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    /*let width  = 0; 
    if(this.props.width == null ){
        width = 400; 
    }else{
       width = this.props.width; 
    }*/
    const width = this.props.width != null?this.props.width:400;
    return (
      <a href="http://lorempixel.com">
        <img
          src={`http://lorempixel.com/${width}/200/cats/${randomCat}`}
          alt="Random cat"
          /*width={this.props.width != null?this.props.width:400} height={this.props.height || 3100}*/
        />
      </a>
    );
  }
}

export default RandomCat;