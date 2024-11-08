function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        granted: [{images}],
        price: {regularPrice},
        addToBasket = Function.prototype
    } = props;

    return  <div className="card" id={mainId}>
                <div className="card-image">
                    <img src={images.full_background} alt={displayName}/>
                </div>
                    <div className="card-content">
                    <p>{displayDescription}</p>
                    <span className="card-title">{displayName}</span>
                </div>
                <div className="card-action">
                    <button className="btn" onClick={() => addToBasket({
                       mainId,
                       displayName,
                       regularPrice
                    })}>Buy</button>
                    <span className="right" style={{fontSize: '1.8rem'}}>${regularPrice}</span>
                </div>
            </div>
}

export {GoodsItem}