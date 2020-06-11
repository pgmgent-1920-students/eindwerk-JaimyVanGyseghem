import React, {useEffect, useState} from 'react';
import { useFirestore } from '../../services/firebase/firestore.services';

import './ticket.scss';

const PokemonsList = () => {

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
        <button className="ticket">Buy ticket</button>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  )
};

export default PokemonsList;