import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../pages/Products/Products.css'
import {motion} from 'framer-motion'
import Filter from './Filter/Filter'

const Products = () => {
    //using hook to fetch mysql data
    const [product, setProduct] = useState([]);

    //Filter part 
     const [active, setActive]=useState('');
    const [filtered, setFiltered]=useState([]);

    useEffect(()=>{
        const getAllProducts = async()=>{
            try{
                const res = await axios.get('/products')
                setProduct(res.data);
                setFiltered(res.data);
            }catch (err){
                console.log(err);
            }
        };
        getAllProducts();
        //dependencies only run one
    },[]);

    //usestate for the toggle in products
    const [isOpen, setIsOpen]=useState(false);
  return (


<>
<div>
    
<Filter product={product} setFiltered={setFiltered} active={active} setActive={setActive} />
<div className='productwrapper'>
   
{filtered.map((products) =>(
    
    <motion.div className='productcard'
    transition={{layout: {duration:1, type:'spring'} }}
        Layout 
        onClick={() => setIsOpen(!isOpen)} 
        style={{borderRadius: "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'}}
        key={products.id}>
        
    <img src={products.image} className='productcardImg' alt='img'/>
        {isOpen && (
    <motion.div 
    className='productcardBody'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    >
        <h2 className='productcardTitle'>{products.name}</h2>
        <br></br>
        <h3>${products.price}</h3>
        <br></br>
        <p className='prodcutcardDescription'>{products.description}</p>
        {/* <a  href={props.button} target="_blank" rel="noreferrer nofollow"> */}
        <button className='productcardbtn'>Add to Cart</button>
        {/* </a> */}
    </motion.div>
    )}
    </motion.div>
))}
</div>
</div>
</> 
  )
}

export default Products