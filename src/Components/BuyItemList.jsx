import React from "react";

function BuyItemList({ name, price, qty }) {
    return (
        <div className="item p-4 bg-slate-300 border border-l flex">
            <div className="image h-40 w-40 bg-slate-600"></div>
            <div className="ml-4 details h-40 w-40 bg-slate-600fuck">
                <div className="name mb-1">{name}</div>
                <div className="cost mb-1">${price}</div>
                <div className="qty mb-1">Qty: {qty}</div>
            </div>
        </div>
    );
}

export default BuyItemList;
