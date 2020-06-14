import React, {useEffect, useState} from 'react';
import { useFirestore } from '../../services/firebase/firestore.services';

import './ticket.scss';
import basket from '../../static/images/basket.png';
import { TICKETS } from '../../routes';

const PokemonsList = () => {
  useEffect(() => {

    const ticketBuy = () => {
    let tickets = document.getElementsByClassName('ticket');
    let price = document.getElementsByClassName('price');
    let basketImg = document.getElementsByClassName('basketImg')[0];
    let basketInfo = document.getElementsByClassName('basketInfo')[0];

    let arr = [];
    for (let i = 0; i < tickets.length; i++) {
      tickets[i].addEventListener('click', function() {
        arr.push(parseInt(price[i].innerHTML));
        console.log(arr);
        let data = localStorage.getItem(`ticket${i}`);
        localStorage.setItem(`ticket${i}`, JSON.stringify(parseInt(arr)));

        basketInfo.innerHTML += data;
        
        if (basketImg.style.display !=='block') {
          basketImg.style.display = 'block';
        }
        basketImg.addEventListener('click', function() {
          basketInfo.classList.toggle('blockMyPrice');
        })
        
      })
    }
  }
   ticketBuy();
  }, []);


  return (
    <div className="container ticketContainer">
      <div className="row">

        <div className="col-12 col-md-6 col-lg-3">
        <div className="leftSide col-12">
        <h2 className="ticketTitle">Day ticket</h2>
        <hr></hr>
        <ul>
          <li>Friday, Saturday or Sunday ticket</li>
          <li>10 MetalFest coupons</li>
        </ul>
        <hr></hr>
        <div className="centerbtn">
        <h2 className="price">120</h2>
        <button className="ticket">Buy ticket</button>
        </div>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
        <div className="leftSide col-12">
        <h2 className="ticketTitle">Day ticket VIP</h2>
        <hr></hr>
        <ul>
          <li>Friday, Saturday or Sunday VIP ticket</li>
          <li>30 MetalFest coupons</li>
          <li>MetalFest T-shirt</li>
          <li>Camping Ticket </li>
        </ul>
        <hr></hr>
        <div className="centerbtn">
        <h2 className="price">190</h2>
        <button className="ticket">Buy ticket</button>
        </div>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
        <div className="rightSide col-12">
        <h2 className="ticketTitle">Combitickets</h2>
        <hr></hr>
        <ul>
          <li>Entry ticket for Friday, Saterday and Sunday</li>
          <li>50 MetalFest coupons</li>
          <li>Camping Ticket</li>
          <li>Camping Ticket </li>
        </ul>
        <hr></hr>
        <div className="centerbtn">
        <h2 className="price">280</h2>
        <button className="ticket">Buy ticket</button>
        </div>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
        <div className="rightSide col-12">
        <h2 className="ticketTitle">Combitickets VIP </h2>
        <hr></hr>
        <ul>
          <li>Entry ticket for Friday, Saterday and Sunday</li>
          <li>75 MetalFest coupons </li>
          <li>MetalFest T-shirt</li>
          <li>Mystery goodyback </li>
          <li>Mystery goodyback </li>
          <li>Camping Ticket</li>
        </ul>
        <hr></hr>
        <div className="centerbtn">
        <h2 className="price">320</h2>
        <button className="ticket">Buy ticket</button>
        </div>
        </div>
        </div>
        
      </div>

      <img className="basketImg" src={basket}></img>
      <p className="basketInfo"></p>
    </div>
  )
};

export default PokemonsList;