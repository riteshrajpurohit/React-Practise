import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

function App() {

  const data = [
    { name: "Dhoom1", artist: "SRK1", added: false },
    { name: "Dhoom2", artist: "SRK2", added: false },
    { name: "Dhoom3", artist: "SRK3", added: false },
    { name: "Dhoom4", artist: "SRK4", added: false }
  ];

  const [songdata, setSongData] = useState(data);

  const handelClick = (index) => {
    setSongData((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, added: !item.added }
          : item
      )
    );
  };

  return (
    <div className='w-full min-h-screen bg-zinc-300'>
      <Navbar data = {songdata}/>

      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
        {songdata.map((obj, index) => (
          <Card
            key={index}
            data={obj}
            index={index}
            handelClick={handelClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;