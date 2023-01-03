import React, {useEffect} from 'react'
import './Filter.css'


function Filter({setActive, active, setFiltered, product}) {

    useEffect(() => {
        if(active === '*'){
            setFiltered(product);
              return;
        }
        //creating filtered so that it can filter through the products
        //using 'genre' including the active state
        const filtered = product.filter((product) =>
        product.genre.includes(active)
        );
        setFiltered(filtered);
      })
    // },[active]);

  return (
    <div className='filter-container'>
        <button onClick={() => setActive('*')} >All</button>
        <button onClick={() => setActive('Pop')}>Pop</button>
        <button onClick={() => setActive('Latin')}>Latin</button>
        <button onClick={() => setActive('R&B')}>R&B</button>
        <button onClick={() => setActive('Alternative')}>Alternative</button>
        <button onClick={() => setActive('Misc')}>Misc.</button>
        </div>
  )
}

export default Filter