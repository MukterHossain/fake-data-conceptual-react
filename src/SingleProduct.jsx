

const SingleProduct = ({product, handleCart}) => {
    // console.log(product)
    return (
        <div>
        <div className="card">
          <img className='card-img' src={product.image} alt="" />
          <h1>{product.title.slice(0, 10)}</h1>
          <p>{product.description}</p>
          <div className='card-footer'>
            <h1>{product.price} $</h1>
            <button onClick={()=>handleCart(product)} className="add-btn">Add To Cart</button>
          </div>
        </div>
        </div>
    );
};

export default SingleProduct;