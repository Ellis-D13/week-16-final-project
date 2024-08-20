import React, { useState } from 'react';
import './TipCalculator.css'; // Importing the associated CSS file for styling

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(15);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleBillAmountChange = (e) => {
        const amount = parseFloat(e.target.value);
        setBillAmount(amount);
        calculateTip(amount, tipPercentage);
    };

    const handleTipPercentageChange = (e) => {
        const percentage = parseFloat(e.target.value);
        setTipPercentage(percentage);
        calculateTip(billAmount, percentage);
    };

    const calculateTip = (bill, percentage) => {
        const tip = (bill * percentage) / 100;
        setTipAmount(tip);
        setTotalAmount(bill + tip);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Tip Calculator</h2>
            <label>
                Bill Amount: $
                <input 
                    type="number" 
                    value={billAmount} 
                    onChange={handleBillAmountChange} 
                    style={{ marginLeft: '10px', marginBottom: '10px' }}
                />
            </label>
            <br />
            <label>
                Tip Percentage: 
                <input 
                    type="number" 
                    value={tipPercentage} 
                    onChange={handleTipPercentageChange} 
                    style={{ marginLeft: '10px', marginBottom: '10px' }}
                />%
            </label>
            <br />
            <h3>Tip Amount: ${tipAmount.toFixed(2)}</h3>
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default TipCalculator;
