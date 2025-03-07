// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Selectaddress = () => {
//     const [addresses, setAddresses] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(()=>{
//         const fetchAddresses = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/api/addresses');

//             }
//             catch(err){
//                 console.log("error getting address in frontend.",err);
//             }
//     })
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default Selectaddress;


import { useState, useEffect } from 'react';

const SelectAddress = () => {
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/user/addresses')
            .then(res => res.json())
            .then(data => setAddresses(data.addresses))
            .catch(err => console.error('Error fetching addresses:', err));
    }, []);

    const handleSelect = (addressId) => {
        setSelectedAddress(addressId);
    };

    const handleConfirm = () => {
        if (selectedAddress) {
            console.log('Selected address:', selectedAddress);
        } else {
            alert('Please select an address');
        }
    };

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-full md:w-4/5 lg:w-4/6 2xl:w-2/3 h-full border-l border-r border-neutral-300 flex flex-col'>
                <h1 className='text-2xl font-semibold text-center my-4'>Select Delivery Address</h1>
                <div className='flex-grow overflow-auto px-3 py-2 gap-y-2'>
                    {addresses.map(address => (
                        <div 
                            key={address._id} 
                            className={`p-4 border rounded-lg mb-2 cursor-pointer ${selectedAddress === address._id ? 'bg-blue-100' : ''}`}
                            onClick={() => handleSelect(address._id)}
                        >
                            <p>{address.street}, {address.city}, {address.state} - {address.zip}</p>
                        </div>
                    ))}
                </div>
                <div className='w-full p-4 flex justify-end'>
                    <button 
                        onClick={handleConfirm} 
                        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
                    >
                        Confirm Address
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectAddress;