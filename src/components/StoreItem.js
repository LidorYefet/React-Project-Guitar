import { button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import './StoreItem.css';
function StoreItem(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        image
        src={props.image}
        height="550px"
        style={{ objectFit: 'cover' }}
      />
      {/* <div>{props.id}</div> */}
      {/* <div>{props.name}</div> */}
      {/* <img src=props.image></img> */}
      {/* <div>{props.category}</div> */}
      {/* <div>{props.manufacturers}</div> */}
      {/* <div>{props.price}</div> */}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{props.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(props.price)}</span>
        </Card.Title>
        {/* <div className="mt-auto">
          {quantity === 0 ? (
            <button>+ Add To Cart </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <buttom>-</buttom>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <buttom>+</buttom>
              </div>
              <buttom variant="danger" size="sm">
                Remove
              </buttom>
            </div>
          )}
        </div> */}
        <div className="amout-div">
          <div
            onClick={(e) => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              } else {
                setQuantity(0);
              }
            }}
          >
            <img
              alt="minus"
              src="https://img.icons8.com/ios/50/000000/minus.png"
            />
          </div>
          <div className="numbergrow">{quantity}</div>
          <div
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <img
              alt="plus"
              src="https://img.icons8.com/ios/50/000000/plus--v1.png"
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;

// type StoreItemProps = {
//     id: number
//     name: String
//     image: String
//     category: String
//     manufacturers: String
//     price: number
// }

// export function StoreItem({
//   id,
//   name,
//   image,
//   category,
//   manufacturers,
//   price} :StoreItemProps) {}
