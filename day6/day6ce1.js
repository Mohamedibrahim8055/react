
import React from 'react';

function Cards({ product_name, price, image_url }) {
    return (
        <>
            <section style={{ height: 100, display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <img src={image_url} alt={product_name} height={100} width={100} />
                <div style={{ marginLeft: 20 }}>
                    <p>{product_name}</p>
                    <p>${price}</p>
                </div>
            </section>
        </>
    );
}

const Day6ce1 = () => {
    const data = [
        {
            "product_name": "Apple iPhone 15 Pro",
            "price": 999,
            "image_url": "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1694758834&width=1445"
        },
        {
            "product_name": "Samsung Galaxy Z Flip5",
            "price": 999,
            "image_url": "https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1690456742/jir6j4kne1oavs1l27xc.png"
        },
        {
            "product_name": "Sony WH-1000XM5 Headphones",
            "price": 349.99,
            "image_url": "https://m.media-amazon.com/images/I/61ULAZmt9NL.jpg"
        },
        {
            "product_name": "Dell XPS 13 Laptop",
            "price": 1199,
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeD3EQ54hgUOiXzA6yQTIL9ofbFhjMRZxWjw&s"
        }
    ];

    return (
        <>
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {data.map((val, i) => {
                    return (
                        <Cards
                            key={i}
                            product_name={val.product_name}
                            price={val.price}
                            image_url={val.image_url}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default Day6ce1;
