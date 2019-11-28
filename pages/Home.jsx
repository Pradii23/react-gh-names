import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import {  } from "./Home.css";
import {pizza} from '../images/pizza.jpeg'

class Home extends Component {
  constructor(props) {
    super(props);
    //this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.NumberList = this.NumberList.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.state = {selectedFood:[],
      foodList :[
        {
          "id": 0,
          "name":'Pizza',
          "image": require("../images/pizza.jpeg"),
        },
        {
          "id": 1,
          "name":'burger',
          "image": require("../images/burger.jpg"),
        },
        {
          "id": 2,
          "name":'Fries',
          "image": require("../images/french-fries.jpg"),
        },
      ]
    };
  }
 ;
 temp=[];
 selectedTempArray=[];
   NumberList(props) {
    const numbers = props.numbers;
    const status=props.status;
   console.log("props",props)
    const listItems = numbers.map(function(number){
      console.log("that this111111",this)
    return  <div className="menuContainer row col-sm-10"  key={number.id}>
        <div className=" col-sm-3 checkbox" >
     <input type="checkbox" onChange={this.updateCart.bind(this,number,status)} />
     </div>
     <div className=" col-sm-3 foodName" >
      {number.name}
     </div>
   
     <div className=" col-sm-3 foodImage" >
     <img className="rounded foodImage" src={number.image} />
     </div>
 </div>
        
    }.bind(this)
    );
    console.log("number111111",listItems);
    return (
      <div>{listItems}</div>
    );
  }
  updateCart(value , status){
   if(status ==1){
    this.temp.push(value)
   }
    else if(status == 2){
      this.selectedTempArray.push(value)
    }
   // console.log(this.temp,"Valuee")
    //this.selectedFood.push(value);
    //this.setState({selectedFood: value});
  }

  

  removeItemFromCart(){
    let tempArray=[];
    let concatedArray=this.selectedTempArray.concat(this.state.foodList);
   // console.log(" this.state.foodList", this.state.foodList)
    this.setState({foodList:concatedArray});
    this.state.foodList=concatedArray;
    console.log("this.state.selectedFood",this.state.selectedFood)
    this.state.selectedFood.forEach(element=>{
     
      let index= this.state.foodList.findIndex(e=>e.id == element.id);
      console.log(index,element,this.state.selectedFood)
      if(index == -1){
        tempArray.push(element);
      }
    });
    console.log("tempArray",tempArray)
    this.setState({selectedFood:tempArray}); 
    this.state.selectedFood=tempArray;
    //this.temp=[];
  }
  addItemToCart(){
 
    let tempArray=[];
    this.setState({selectedFood: this.temp});
    this.state.selectedFood=this.temp;
    console.log("this.state.selectedFood",this.state.selectedFood)
    this.state.foodList.forEach(element=>{
     
      let index= this.state.selectedFood.findIndex(e=>e.id == element.id);
      console.log(index,element,this.state.selectedFood)
      if(index == -1){
        tempArray.push(element);
      }
    });
    console.log("tempArray",tempArray)
    this.setState({foodList:tempArray}); 
    this.state.foodList=tempArray;
   // this.temp=this.state.foodList;
  }
  
  render() {
    return (
      <div className="fluid-container">
        <div className="mainDiv">
        <Navbar />
        <div className="row">
          <div className="col-sm-6 ">
           <label className="col-sm-10 labelText1">Have no time </label>
           <label className="col-sm-10 labelText2">to Prepare <strong>food</strong> ?</label>
           

          </div>
        
          {/* <a href="#scroll-bottom" onclick="console.log('The link was clicked.'); return false">Click me</a> */}
        
        </div>
        <div className="row">
          <label className="col-sm-6 subLabel">Choose one of our plans , enter delivery time and enjoy delicious food without leaving your home.</label>
        </div>
        <div className="buttonContainer">
          
          <button className="orderFoodButton"><a class="orderFoodRef" href="#scroll-bottom">Order Food</a></button>
        </div>
        <div className="row col-sm-4 fafaIcons">
        <img className="socialLogo" src={require('../images/twitter.jpg')} />
        <img className="socialLogo" src={require('../images/inst.png')} />
        <img className="socialLogo" src={require('../images/twitter.jpg')} />


     

        </div>
       
    
    
 
        </div>
   
        <div className="actionContainer col-sm-12 row" id="scroll-bottom">
        <div className="col-sm-4 offset-1 itemContainer">
          <div className="foodLabel">
          <span >Available Options</span>

          </div>
         <div className="foodMainContainer">
         <this.NumberList numbers={this.state.foodList} status={1} />
         </div>

         {this.state.foodList.length <= 0 &&
        <h3>
          Currently we do not have any item available
        </h3>
      }
         
        </div>
        <div className="col-sm-2 button-container">
          <button className="col-sm-10 orderFoodButton" onClick={this.addItemToCart}>Add</button>
          <button className="col-sm-10 orderFoodButton" onClick={this.removeItemFromCart}>Remove</button>
        </div>
        <div className="col-sm-4 offset-1 itemContainer">
        <div className="foodLabel">
          <span >Selected Options</span>
          </div>
         <div className="foodMainContainer">
         <this.NumberList numbers={this.state.selectedFood} status={2} />
         </div>
         {this.state.selectedFood.length <= 0 &&
        <h3>
          Your cart is empty. Select an item and click on Add .
        </h3>
      }
        </div>
        </div>
        
       
      </div>


    );
  }
}

export default Home
