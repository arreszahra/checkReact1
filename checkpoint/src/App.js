import React from 'react'
import './App.css';
import Name from './Name'; 
import Price from './Price';
import Description from './Description';
import Image from './Image';
import products from './product';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const FirstName=""
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Name name={products.name}/>
        <Price price={products.price}/>
        <Description description={products.description}/>
        <Image image={products.image}/>


      </Card.Body>
    </Card>

    <p>{FirstName ? `Hello, ${FirstName}!` : "Hello, there!"}</p>
    {FirstName && <img src="../images.jpg" alt="Your Image" />}
    </div>
  );
}

export default App;
