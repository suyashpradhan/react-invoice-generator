import React from 'react';
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
            <h1>Invoice Generator</h1>
            {/* Receiver's Form */}
            <div>
                <h1>Bill To</h1>
                <form>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Email Address" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input type="date" placeholder="Due date" value={date} onChange={(e) => setDate(e.target.value)}/>
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
