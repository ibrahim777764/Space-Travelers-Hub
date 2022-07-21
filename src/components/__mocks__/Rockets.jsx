import React from 'react';

const rockets = [

  {
    id: 1,
    reserved: true,
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'rocket',
  },
  {
    id: 2,
    reserved: false,
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'rocket',
  },
  {
    id: 3,
    reserved: true,
    flickr_images: [
      'https://imgur.com/DaCfMsj.jpg',
      'https://imgur.com/azYafd8.jpg',
    ],
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    rocket_id: 'falcon1',
    rocket_name: 'Falcon 1',
    rocket_type: 'rocket',
  },
];

const handleMessage = (reserved) => (reserved ? 'Cancel reservation' : 'Reserve Rocket');
const handleReserved = (reserved) => (reserved ? { badge: 'Reserved', class: 'outline-danger' } : { badge: '', class: 'outline-secondary' });

const RocketList = () => (
  <div className="container-fluid">
    {
        rockets.map((item) => (
          <div key={item.id} className="container-fluid d-flex my-4 mx-0 mainDiv">
            <img className="img-fluid" src={item.flickr_images[0]} alt={item.rocket_name} />
            <div>
              <h3>{item.rocket_name}</h3>
              <div>
                <button type="button" bg="info">{handleReserved(item.reserved).badge}</button>
                <p>{item.description}</p>
              </div>
              <button className="btn2" type="button" variant={handleReserved(item.reserved).class}>{handleMessage(item.reserved)}</button>
            </div>
          </div>
        ))
      }
    ;
  </div>
);

export default RocketList;
