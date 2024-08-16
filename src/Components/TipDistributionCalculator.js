import React, { useState } from 'react';

const TipDistributionCalculator = () => {
    const [totalTips, setTotalTips] = useState(0);
    const [employees, setEmployees] = useState([{ id: 1, value: '' }]);
    const [distribution, setDistribution] = useState([]);
    
    const handleTotalTipsChange = (e) => {
        setTotalTips(parseFloat(e.target.value) || 0);
    };

    const handleEmployeeChange = (id, value) => {
        setEmployees(employees.map(emp => emp.id === id ? { ...emp, value: parseFloat(value) || 0 } : emp));
    };

    const addEmployee = () => {
        setEmployees([...employees, { id: employees.length + 1, value: '' }]);
    };

    const calculateDistribution = () => {
        const totalInput = employees.reduce((sum, emp) => sum + emp.value, 0);
        if (totalInput === 0) return;
        
        const distribution = employees.map(emp => ({
            id: emp.id,
            amount: (emp.value / totalInput) * totalTips
        }));
        setDistribution(distribution);
    };

    return (
        <div className="container">  {/* Updated the className */}
            <h2>Tip Distribution Calculator</h2>
            <div>
                <label>
                    Total Tips Earned: $
                    <input 
                        type="number" 
                        value={totalTips} 
                        onChange={handleTotalTipsChange} 
                    />
                </label>
            </div>
            <div>
                <h3>Employee Shares</h3>
                {employees.map(emp => (
                    <div key={emp.id}>
                        <label>
                            Employee {emp.id} Percentage/Hours: 
                            <input 
                                type="number" 
                                value={emp.value} 
                                onChange={(e) => handleEmployeeChange(emp.id, e.target.value)} 
                            />
                        </label>
                    </div>
                ))}
                <button onClick={addEmployee}>Add Employee</button>
            </div>
            <div>
                <button onClick={calculateDistribution}>Calculate Distribution</button>
            </div>
            <div>
                <h3>Distribution Result:</h3>
                <ul>
                    {distribution.map(dist => (
                        <li key={dist.id}>Employee {dist.id}: ${dist.amount.toFixed(2)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TipDistributionCalculator;
