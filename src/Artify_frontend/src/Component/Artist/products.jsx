// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Product() {
    const [quantities, setQuantities] = useState({ 1: 1, 2: 1, 3: 1, 4: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10:1, 11: 1, 12: 1, 13: 1 }); // เก็บจำนวนสินค้าแต่ละชิ้น

    const increment = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const decrement = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0,
        }));
    };

    return (
        <>
            <p className="text-2xl flex items-center bg-white p-4 rounded-md m-2 kanit-semibold">
                <img
                    src="https://cdn.pixabay.com/photo/2017/09/13/22/04/cityscape-2747226_1280.png"
                    className="w-6 h-6 mr-2"
                    alt="Profile Decorations"
                />
                Profile Decorations
            </p>
            <div className="flex flex-wrap justify-center items-center align-center gap-4">
                {/* กรอบสินค้าเดิมและสินค้าใหม่ */}
                {[
                    { id: 1, image: 'images/shop1.jpg', productName: 'ชื่อสินค้าที่นี่', price: '20 USDT' },
                    { id: 2, image: 'images/shop2.jpg', productName: 'ชื่อสินค้าที่นี่', price: '25 USDT' },
                    { id: 3, image: 'images/shop3.jpg', productName: 'ชื่อสินค้าที่นี่', price: '23 USDT' },
                    { id: 4, image: 'images/shop4.jpg', productName: 'ชื่อสินค้าที่นี่', price: '24 USDT' }
                ].map((product) => (
                    <div
                        key={product.id}
                        className="w-[22%] bg-white border border-gray-200 rounded-lg shadow-lg"
                    >
                        {/* รูปสินค้า */}
                        <img
                            src={product.image}
                            alt={`Product ${product.id}`}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            {/* ชื่อสินค้า */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.id === 1
                                    ? "ชื่อสินค้าที่นี่"
                                    : `สินค้าใหม่`}
                            </h3>
                            {/* คำอธิบายสินค้า */}
                            <p className="text-gray-500 text-sm mt-2">
                                {product.id === 1
                                    ? "คำอธิบายสั้น ๆ ของสินค้าแบบย่อที่ทำให้ลูกค้าสนใจ."
                                    : `คำอธิบายของสินค้าที่เพิ่มเข้ามาใหม่ .`}
                            </p>
                            {/* ปุ่มการกดถูกใจ, ซื้อ */}
                            <div className="flex justify-between items-center mt-2">
                                <button className="text-red-500 hover:text-red-700">{product.price}</button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 ">
                                    Buy now
                                </button>
                            </div>
                            {/* จำนวนสินค้า */}
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
                                    onClick={() => decrement(product.id)}
                                >
                                    -
                                </button>
                                <span className="text-lg font-semibold">{quantities[product.id]}</span>
                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
                                    onClick={() => increment(product.id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section อื่นๆ */}
            <p className="text-2xl flex items-center bg-white p-4 rounded-md m-2 kanit-semibold">
                <img
                    src="https://www.pngarts.com/files/4/Price-Tag-PNG-High-Quality-Image.png"
                    className="w-6 h-6 mr-2"
                    alt="Artist Merchandise"
                />
                Artist merchandise
                </p>
            <div className="flex flex-wrap justify-center items-center align-center gap-4">
                {/* กรอบสินค้าเดิมและสินค้าใหม่ */}
                {[
                    { id: 6, image: 'images/shop6.jpg', productName: 'ชื่อสินค้าที่นี่', price: '10 USDT' },
                    { id: 7, image: 'images/shop7.jpg', productName: 'ชื่อสินค้าที่นี่', price: '15 USDT' },
                    { id: 8, image: 'images/shop8.jpg', productName: 'ชื่อสินค้าที่นี่', price: '9 USDT' },
                    { id: 9, image: 'images/shop9.jpg', productName: 'ชื่อสินค้าที่นี่', price: '20 USDT' }
                ].map((product) => (
                    <div
                        key={product.id}
                        className="w-[22%] bg-white border border-gray-200 rounded-lg shadow-lg"
                    >
                        {/* รูปสินค้า */}
                        <img
                            src={product.image}
                            alt={`Product ${product.id}`}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            {/* ชื่อสินค้า */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.id === 1
                                    ? "ชื่อสินค้าที่นี่"
                                    : `สินค้าใหม่`}
                            </h3>
                            {/* คำอธิบายสินค้า */}
                            <p className="text-gray-500 text-sm mt-2">
                                {product.id === 1
                                    ? "คำอธิบายสั้น ๆ ของสินค้าแบบย่อที่ทำให้ลูกค้าสนใจ."
                                    : `คำอธิบายของสินค้าที่เพิ่มเข้ามาใหม่ .`}
                            </p>
                            {/* ปุ่มการกดถูกใจ, ซื้อ */}
                            <div className="flex justify-between items-center mt-2">
                                <button className="text-red-500 hover:text-red-700">{product.price}</button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 ">
                                    Buy now
                                </button>
                            </div>
                            {/* จำนวนสินค้า */}
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
                                    onClick={() => decrement(product.id)}
                                >
                                    -
                                </button>
                                <span className="text-lg font-semibold">{quantities[product.id]}</span>
                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
                                    onClick={() => increment(product.id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Section อื่นๆ */}
            <p className="text-2xl flex items-center bg-white p-4 rounded-md m-2 kanit-semibold">
                <img
                   src="https://cdn.icon-icons.com/icons2/1307/PNG/512/ticket_86171.png"
                    className="w-6 h-6 mr-2"
                    alt="Artist Merchandise"
                />
                Concerts and shows
                </p>
            <div className="flex flex-wrap justify-center items-center align-center gap-4">
                {/* กรอบสินค้าเดิมและสินค้าใหม่ */}
                {[
                    { id: 10, image: 'images/shop10.jpg', productName: 'ชื่อสินค้าที่นี่', price: '99 USDT' },
                    { id: 11, image: 'images/shop11.jpg', productName: 'ชื่อสินค้าที่นี่', price: '80 USDT' },
                    { id: 12, image: 'images/shop12.jpg', productName: 'ชื่อสินค้าที่นี่', price: '120 USDT' },
                    { id: 13, image: 'images/shop13.jpg', productName: 'ชื่อสินค้าที่นี่', price: '200 USDT' }
                ].map((product) => (
                    <div
                        key={product.id}
                        className="w-[22%] bg-white border border-gray-200 rounded-lg shadow-lg"
                    >
                        {/* รูปสินค้า */}
                        <img
                            src={product.image}
                            alt={`Product ${product.id}`}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            {/* ชื่อสินค้า */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.id === 1
                                    ? "ชื่อสินค้าที่นี่"
                                    : `สินค้าใหม่`}
                            </h3>
                            {/* คำอธิบายสินค้า */}
                            <p className="text-gray-500 text-sm mt-2">
                                {product.id === 1
                                    ? "คำอธิบายสั้น ๆ ของสินค้าแบบย่อที่ทำให้ลูกค้าสนใจ."
                                    : `คำอธิบายของสินค้าที่เพิ่มเข้ามาใหม่ .`}
                            </p>
                            {/* ปุ่มการกดถูกใจ, ซื้อ */}
                            <div className="flex justify-between items-center mt-2">
                                <button className="text-red-500 hover:text-red-700">{product.price}</button>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 ">
                                    Buy now
                                </button>
                            </div>
                            {/* จำนวนสินค้า */}
                            <div className="flex items-center justify-between mt-4">
                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
                                    onClick={() => decrement(product.id)}
                                >
                                    -
                                </button>
                                <span className="text-lg font-semibold">{quantities[product.id]}</span>
                                <button
                                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300"
                                    onClick={() => increment(product.id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
