import { useEffect, useState } from "react";

const Calculate = () => {

    function formatNumber(number) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
        }).format(number);
    }

    const [ values, setValues ] = useState({});
    const [ result, setResult  ] = useState(0);


    const handleOnSubmit = (e) => {
        e.preventDefault();
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    useEffect(() => {
        const { kilometros, tiempo } = values;
        if (kilometros?.length > 0 && tiempo?.length > 0) {
            if (tiempo >= 20) {
                setResult(kilometros * 1000 + tiempo * 100 + 4500);
            }else if (tiempo >= 30) {
                setResult(kilometros * 1000 + tiempo * 100 + 5000);
            }else {
                setResult(kilometros * 1000 + tiempo * 100 + 4000);
            }
        }

        if (kilometros?.length === 0 || tiempo?.length === 0) {
            setResult(0);
        }
    }, [values]);


  return (
    <div className="calculate-body">
        <form onSubmit={handleOnSubmit} className="calculate-form">
            <div className="calculate-input-container">
                <label htmlFor="kilometros">Kilometros</label>
                <input onChange={handleOnChange} required="required" name="kilometros" type="number" placeholder="Ingrese los kilometros"/>
            </div>

            <div className="calculate-input-container">
                <label htmlFor="tiempo">Tiempo</label>
                <input onChange={handleOnChange} required="required" name="tiempo" type="number" placeholder="Ingrese el tiempo"/>
            </div>
        </form>

        <div className="result-container" style={{ backgroundColor: result > 0 && '#9FB54A', transition: 'all 500ms ease-in-out'}}>
            { result > 0 && <p style={{ transition: 'all 400ms ease-in-out' }}>🔸 Precio cercano</p>}
            <span>{formatNumber(result)}</span>
        </div>
    </div>
  )
}

export default Calculate