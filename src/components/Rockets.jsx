/* eslint-disable import/order */

import React, { useEffect } from 'react';
import { bookRocket, cancelBooking, fetchRockets } from '../redux/rockets/rockets';
import { useDispatch, useSelector } from 'react-redux';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  const handleMessage = (reserved) => (reserved ? 'Cancel reservation' : 'Reserve Rocket');
  const handleReserved = (reserved) => (reserved ? { badge: 'Reserved', class: 'outline-danger' } : { badge: '', class: 'outline-secondary' });

  return (
    <div className="container-fluid">
      {
        rockets.map((item) => (
          <div key={item.id} className="container-fluid d-flex my-4 mx-0 mainDiv">
            <img className="img-fluid" src={item.flickr_images[0]} alt={item.rocket_name} />
            <div>
              <h3>{item.rocket_name}</h3>
              <div>
                <Badge bg="info">{handleReserved(item.reserved).badge}</Badge>
                <p>{item.description}</p>
              </div>
              <Button type="button" variant={handleReserved(item.reserved).class} onClick={() => { dispatch(!item.reserved ? bookRocket(item.id) : cancelBooking(item.id)); }}>{handleMessage(item.reserved)}</Button>
            </div>
          </div>
        ))
      }
      ;
    </div>
  );
};

export default Rockets;
