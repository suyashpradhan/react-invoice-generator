import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

interface Items {
    id: string;
    itemName?: string;
    itemPrice?: string;
    itemQuantity?: string;
}

function App() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [date, setDate] = React.useState('');
    const [address, setAddress] = React.useState('');

    const [senderName, setSenderName] = React.useState('');
    const [senderEmail, setSenderEmail] = React.useState('');
    const [senderAddress, setSenderAddress] = React.useState('');

    const [itemName, setItemName] = React.useState('');
    const [itemPrice, setItemPrice] = React.useState('');
    const [itemQuantity, setItemQuantity] = React.useState('');
    const [items, setItems] = React.useState<Items[]>([]);

    const [discount, setDiscount] = useState(0)
    const [tax, setTax] = useState(0)

    const [subtotal, setSubtotal] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    // Calculate the subtotal whenever items are added or removed
    useEffect(() => {
        const calculatedSubtotal = items.reduce(
            (acc, item) => acc + Number(item.itemPrice) * Number(item.itemQuantity),
            0
        );
        setSubtotal(calculatedSubtotal);

        // Calculate total based on discount and tax
        const discountAmount = (calculatedSubtotal * discount) / 100;
        const taxAmount = ((calculatedSubtotal - discountAmount) * tax) / 100;
        const calculatedTotal = calculatedSubtotal - discountAmount + taxAmount;

        setTotal(calculatedTotal);
    }, [items, discount, tax]);

    const itemTotal = Number(itemPrice) * Number(itemQuantity);

    const handleItems = () => {
        const newItem: Items = {
            id: uuidv4(),
            itemName,
            itemPrice,
            itemQuantity,
        };
        setItems((prev) => [...prev, newItem]);
        setItemName('');
        setItemPrice('');
        setItemQuantity('');
    };

    const handleDeleteItem = (id: string) => {
        const updatedItem: Items[] = items.filter((item) => item.id !== id);
        setItems(updatedItem);
    };

    return (
        <div className="App p-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Invoice Generator</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column */}
                <div className="flex-1">
                    {/* Receiver's Form */}
                    <h2 className="text-xl font-semibold mb-4">Bill To</h2>
                    <div className="mb-8">
                        <form className="space-y-4 grid grid-cols-1">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                                <div className="grid-cols-4">
                                    <label htmlFor="due_date"
                                           className="block text-sm font-medium text-gray-700 mb-1">
                                        Due Date
                                    </label>
                                    <input
                                        id="due_date"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                    Address
                                </label>
                                <textarea
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Sender's Form */}
                    <h2 className="text-xl font-semibold mb-4">Bill From</h2>
                    <div className="mb-8">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    id="senderName"
                                    type="text"
                                    value={senderName}
                                    onChange={(e) => setSenderName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    id="senderEmail"
                                    type="email"
                                    value={senderEmail}
                                    onChange={(e) => setSenderEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="senderAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                    Address
                                </label>
                                <textarea
                                    id="senderAddress"
                                    value={senderAddress}
                                    onChange={(e) => setSenderAddress(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </form>
                    </div>

                    {/* Items Input */}
                    <h2 className="text-xl font-semibold mb-4">Invoice Items</h2>
                    <div className="space-y-4 mb-8">
                        <div className="grid grid-cols-4 gap-4">
                            <div>
                                <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Item
                                </label>
                                <input
                                    id="itemName"
                                    type="text"
                                    value={itemName}
                                    onChange={(e) => setItemName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="itemQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                                    Quantity
                                </label>
                                <input
                                    id="itemQuantity"
                                    type="number"
                                    value={itemQuantity}
                                    onChange={(e) => setItemQuantity(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-700 mb-1">
                                    Price
                                </label>
                                <input
                                    id="itemPrice"
                                    type="number"
                                    value={itemPrice}
                                    onChange={(e) => setItemPrice(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="itemTotal" className="block text-sm font-medium text-gray-700 mb-1">
                                    Total
                                </label>
                                <input
                                    id="itemTotal"
                                    type="text"
                                    value={itemTotal || ''}
                                    disabled
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <button
                            className="mt-4 text-blue-500 font-semibold underline hover:text-blue-600"
                            onClick={handleItems}
                        >
                            Add Item
                        </button>
                    </div>

                    {/* Items List */}
                    {items.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Added Items</h2>
                            {items.map((item: Items) => {
                                return (
                                    <div key={item.id}
                                         className="flex items-center justify-between p-4 bg-gray-100 rounded mb-2">
                                        <div>
                                            <p className="font-bold">{item.itemName}</p>
                                            <p>
                                                {item.itemQuantity} x {item.itemPrice} ={' '}
                                                {Number(item.itemPrice) * Number(item.itemQuantity)}
                                            </p>
                                        </div>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
                                            onClick={() => handleDeleteItem(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div className="flex-1">
                    {/* Preview */}
                    <h2 className="text-xl font-semibold mb-4">Invoice Preview</h2>
                    {/* Bill To */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Bill To</h3>
                        <p>
                            <span className="font-semibold">Name:</span> {name || ''}
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span> {email || ''}
                        </p>
                        <p>
                            <span className="font-semibold">Due Date:</span> {date || ''}
                        </p>
                        <p>
                            <span className="font-semibold">Address:</span> {address || ''}
                        </p>
                    </div>

                    {/* Bill From */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Bill From</h3>
                        <p>
                            <span className="font-semibold">Name:</span> {senderName || ''}
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span> {senderEmail || ''}
                        </p>
                        <p>
                            <span className="font-semibold">Address:</span> {senderAddress || ''}
                        </p>
                    </div>

                    {/* Items */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Items</h3>
                        {items.length > 0 ? (
                            items.map((item: Items) => {
                                return (
                                    <div key={item.id} className="flex justify-between mb-2">
                                        <p>{item.itemName}</p>
                                        <p>
                                            {item.itemQuantity} x {item.itemPrice} ={' '}
                                            {Number(item.itemPrice) * Number(item.itemQuantity)}
                                        </p>
                                    </div>
                                );
                            })
                        ) : (
                            <p>No items added.</p>
                        )}
                    </div>

                    {/* Total */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Totals</h3>
                        <div className="mb-4">
                            <label htmlFor="tax" className="block text-sm font-medium text-gray-700 mb-1">
                                Tax (%)
                            </label>
                            <input
                                id="tax"
                                type="number"
                                onChange={(e) => setTax(Number(e.target.value))}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">
                                Discount (%)
                            </label>
                            <input
                                id="discount"
                                type="number"
                                onChange={(e) => setDiscount(Number(e.target.value))}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                        </div>
                        <p>
                            <span
                                className="font-semibold">Sub Total: {subtotal.toFixed(2)} </span> {/* Calculate Sub Total */}
                        </p>
                        <p>
                            <span className="font-semibold">Total: {total.toFixed(2)} </span> {/* Calculate Total */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
