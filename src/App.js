import React, {useState} from 'react';
import './index.css';
import checkbox from './checkbox.png'
import circle from './blankcircle.png'




function App() {

 const [items, setItems] = useState([
  {
    item: "Cereal",
    brand: 'Cookie Crisp',
    units: "10.5oz" ,
    quantity: 1,
    isPurchased: false
  },
  {
    item: "Crackers",
    brand: "Cheeze-It",
    units: "21oz",
    quantity: 1,
    isPurchased: false,
  },
  {
    item: "Wine",
    brand: "19 Crimes-Cali Red",
    units: "750ml",
    quantity: 1,
    isPurchased: false
  }
 ]); 

 const [inputValue, setInputValue] = useState("");
 const [inputUnit, setUnitValue] = useState("");
 const [totalItemCount, setTotalItemCount] = useState(0);

 const handleAddButtonClick = () => {
   
  const newItem = {
     item: inputValue,
     quantity: 1,
     units: inputUnit,
     isPurchased: false,
   }
   const newItems =[...items, newItem];
    setItems(newItems);
    setInputValue("");
    setUnitValue("")
 }

const handleQuantityIncrease = (index) => {
  const newItems = [...items];
  newItems[index].quantity++;
  setItems(newItems);
  calculateTotal();
}
const handleQuantityDecrease = (index) => {
  const newItems = [...items];
  newItems[index].quantity--;
  setItems(newItems);
  calculateTotal();
}
 
const toggleComplete = (index) => {
  const newItems = [...items];

  newItems[index].isPurchased = !newItems[index].isPurchased

  setItems(newItems);
}

const calculateTotal =() => {
  const totalItemCount = items.reduce((total, item)=>{
 return total + item.quantity;
  }, 0);
  setTotalItemCount(totalItemCount);
};
 return (
  <div className='app-background'>
    <div className='main-container'>
      <div className='add-item-box'>
        <input value = {inputValue} onChange={(event)=> setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
      </div>
      <div className="add-item-box">
      <input value = {inputUnit} onChange={(event)=> setUnitValue(event.target.value)} className='add-item-input' placeholder='unit' />
       <button onClick={() => handleAddButtonClick()}>+</button>
       
      </div>
      <div className='item-list'>
        {items.map((itemName,index)=><div className='item-container'>
          <div className='item-name' onClick={()=> toggleComplete(index)}>
            {/* HINT: replace false with a boolean indicating the item has been completed or not */}
            {itemName.isPurchased ? (
              <>
                <img src ={checkbox} className="checkbox" />
                <span className='completed'> {itemName.item}</span>
                <span className='completed'> {itemName.units}</span>

              </>
            ) : (
              <>
                <img src ={circle} className="circle" />
                <span> {itemName.item}</span>
                <span> {itemName.units}</span>
              </>
            )}
          </div>
          <div className='quantity'>
            <button onClick={() => handleQuantityDecrease(index)}>-</button> 
            <span>{itemName.quantity}</span>
             <button onClick={() => handleQuantityIncrease(index)}>+</button>  
          </div>
        </div>)}
        
      </div>
      <div className='total'>Total: {totalItemCount}</div>
    </div>
  </div>
);
}

export default App;
