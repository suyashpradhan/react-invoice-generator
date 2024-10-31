import React from 'react';
import {v4 as uuidv4} from 'uuid';

interface Items {
    id: string;
    itemName?: string;
    itemPrice?: string;
    itemQuantity?: string;
}

const products = [
    {
        id: 1,
        name: 'High Wall Tote',
        href: '#',
        price: '$210.00',
        color: 'White and black',
        size: '15L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, white handles, and black drawstring top.',
    },
]


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

    const [subtotal, setSubtotal] = React.useState('');
    const [total, setTotal] = React.useState('');

    const itemTotal = Number(itemPrice) * Number(itemQuantity);
    const subTotal = Number()

    const handleItems = () => {
        const newItem: Items = {
            id: uuidv4(),
            itemName,
            itemPrice,
            itemQuantity
        }
        setItems((prev) => [...prev, newItem]);
    }

    const handleDeleteItem = (id: string) => {
        const updatedItem: Items[] = items.filter((item) => item.id !== id)
        setItems(updatedItem)
    }


    return (
        <div className="App">
            <div className="bg-white">
                {/* Background color split screen for large screens */}
                <div className="fixed top-0 left-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true"/>
                <div className="fixed top-0 right-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true"/>

                <div
                    className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
                    <h1 className="sr-only">Order information</h1>

                    <section
                        aria-labelledby="summary-heading"
                        className="bg-gray-50 px-4 pt-16 pb-10 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
                    >
                        <div className="mx-auto max-w-lg lg:max-w-none">
                            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                                Order summary
                            </h2>

                            <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900">
                                {products.map((product) => (
                                    <li key={product.id} className="flex items-start space-x-4 py-6">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-20 w-20 flex-none rounded-md object-cover object-center"
                                        />
                                        <div className="flex-auto space-y-1">
                                            <h3>{product.name}</h3>
                                            <p className="text-gray-500">{product.color}</p>
                                            <p className="text-gray-500">{product.size}</p>
                                        </div>
                                        <p className="flex-none text-base font-medium">{product.price}</p>
                                    </li>
                                ))}
                            </ul>

                            <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
                                <div className="flex items-center justify-between">
                                    <dt className="text-gray-600">Subtotal</dt>
                                    <dd>$320.00</dd>
                                </div>

                                <div className="flex items-center justify-between">
                                    <dt className="text-gray-600">Shipping</dt>
                                    <dd>$15.00</dd>
                                </div>

                                <div className="flex items-center justify-between">
                                    <dt className="text-gray-600">Taxes</dt>
                                    <dd>$26.80</dd>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base">Total</dt>
                                    <dd className="text-base">$361.80</dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    <form className="px-4 pt-16 pb-36 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
                        <div className="mx-auto max-w-lg lg:max-w-none">
                            <section aria-labelledby="contact-info-heading">
                                <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                                    Contact information
                                </h2>

                                <div className="mt-6">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            id="email-address"
                                            name="email-address"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="payment-heading" className="mt-10">
                                <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
                                    Payment details
                                </h2>

                                <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-4">
                                    <div className="col-span-3 sm:col-span-4">
                                        <label htmlFor="name-on-card"
                                               className="block text-sm font-medium text-gray-700">
                                            Name on card
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="name-on-card"
                                                name="name-on-card"
                                                autoComplete="cc-name"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-4">
                                        <label htmlFor="card-number"
                                               className="block text-sm font-medium text-gray-700">
                                            Card number
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="card-number"
                                                name="card-number"
                                                autoComplete="cc-number"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-2 sm:col-span-3">
                                        <label htmlFor="expiration-date"
                                               className="block text-sm font-medium text-gray-700">
                                            Expiration date (MM/YY)
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="expiration-date"
                                                id="expiration-date"
                                                autoComplete="cc-exp"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                            CVC
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="cvc"
                                                id="cvc"
                                                autoComplete="csc"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="shipping-heading" className="mt-10">
                                <h2 id="shipping-heading" className="text-lg font-medium text-gray-900">
                                    Shipping address
                                </h2>

                                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                            Company
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                            Apartment, suite, etc.
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="apartment"
                                                name="apartment"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="region"
                                                name="region"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="postal-code"
                                               className="block text-sm font-medium text-gray-700">
                                            Postal code
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="postal-code"
                                                name="postal-code"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section aria-labelledby="billing-heading" className="mt-10">
                                <h2 id="billing-heading" className="text-lg font-medium text-gray-900">
                                    Billing information
                                </h2>

                                <div className="mt-6 flex items-center">
                                    <input
                                        id="same-as-shipping"
                                        name="same-as-shipping"
                                        type="checkbox"
                                        defaultChecked
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <div className="ml-2">
                                        <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">
                                            Same as shipping information
                                        </label>
                                    </div>
                                </div>
                            </section>

                            <div
                                className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
                                <button
                                    type="submit"
                                    className="w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
                                >
                                    Continue
                                </button>
                                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                                    You won't be charged until the next step.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <h1>Invoice Generator</h1>
            {/* Receiver's Form */}
            <div>
                <h1>Bill To</h1>
                <form>
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                    placeholder="janesmith"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="Email Address" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input type="date" placeholder="Due date" value={date}
                           onChange={(e) => setDate(e.target.value)}/>
                    <input type="text" placeholder="Address" value={address}
                           onChange={(e) => setAddress(e.target.value)}/>
                </form>
            </div>


            {/* Sender Form */}
            <div>
                <h1>Bill From</h1>
                <form>
                    <input type="text" placeholder="Name" value={senderName}
                           onChange={(e) => setSenderName(e.target.value)}/>
                    <input type="text" placeholder="Email Address" value={senderEmail}
                           onChange={(e) => setSenderEmail(e.target.value)}/>
                    <input type="text" placeholder="Address" value={senderAddress}
                           onChange={(e) => setSenderAddress(e.target.value)}/>
                </form>
            </div>

            {/* Items */}
            <h1>Invoice Items</h1>
            <div>
                <input type="text" value={itemName} placeholder="Item Name"
                       onChange={(e) => setItemName(e.target.value)}/>
                <input type="number" value={itemQuantity} placeholder="Quantity"
                       onChange={(e) => setItemQuantity(e.target.value)}/>
                <input type="number" value={itemPrice} placeholder="Price"
                       onChange={(e) => setItemPrice(e.target.value)}/>
                <input type="text" disabled placeholder="Amount" value={itemTotal}/>
                <button onClick={handleItems}>Add Item</button>
            </div>

            {items.map((item: Items) => {
                return (
                    <div key={item.id}>
                        <h1>{item.itemName}</h1>
                        <h1>{item.itemPrice}</h1>
                        <h1>{item.itemQuantity}</h1>
                        <h1>Total: {itemTotal}</h1>
                        {items.length >= 1 && <button onClick={() => handleDeleteItem(item?.id)}>Delete Item</button>}
                    </div>
                )
            })}

            {/* Preview */}
            <h1>Bill To</h1>
            <h2>Name {name}</h2>
            <h2>Email {email}</h2>
            <h2>Due date {date}</h2>
            <h2>Address {address}</h2>

            <hr/>

            <h1>Bill From</h1>
            <h2>Name {senderName} </h2>
            <h2>Email {senderEmail} </h2>
            <h2>Address {senderAddress} </h2>

            <hr/>

            <h1>Items</h1>
            {items.map((item: Items) => {
                return (
                    <div key={item.id}>
                        <h1>{item.itemName}</h1>
                        <h1>{item.itemPrice}</h1>
                        <h1>{item.itemQuantity}</h1>
                    </div>
                )
            })}

            {/* Total */}
            <input type="text" placeholder="Tax %" onChange={(e) => console.log(e)}/>
            <input type="text" placeholder="Discount %" onChange={(e) => console.log(e)}/>
            <h1>Sub total </h1>
            <h1>Total</h1>
        </div>
    );
}

export default App;
