import React from 'react';

export default function inicial() {
    return (
        <div>
            <div>
                <h2>Objeto= {obj.p1}</h2>
                <h2>Mystery= {obj.answer}</h2>
                <h2>Inverse of PI= {obj.InverseOfPI}</h2>
                <h2>f1()= {obj.f1()}</h2>

            </div>
            <div>
                <CreateElements />
            </div>
        </div>
    );
}

const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;
const obj = {
    p1: 20,
    p2: 10,
    f1() {
        for (let i = 0; i <= 1; i++) {
            console.log('f1():', i);
        }
        return obj.p1 * obj.p2;
    },
    [mystery]: 42,
    InverseOfPI,
};


let CreateElements = () => {
    console.log('Push:', 'Test');
    let elements = []
    for (let i = 0; i <= 5; i++) {
        elements.push(<h2 key={i}>Etiqueta no: {i}</h2>)
        console.log('Push:', i);
    }
    return elements;
};
