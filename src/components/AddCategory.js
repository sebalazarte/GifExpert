import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategorias, setLimite }) => { //se desestructuro props

    const [inputValue, setInputValue] = useState('');
    const [numberValue, setNumberValue] = useState(10);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumberValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [inputValue, ...cats,]);
            setInputValue('');
        }

        if (numberValue.length > 0) {
            setLimite(numberValue);
        }
    }

    const handleClean = (e) => {
        e.preventDefault();
        setCategorias([]);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                            <label className="input-group-text">Buscar</label>
                            <input
                                id="txtBuscar"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="ingrese para buscar..."
                                required />
                            <label className="input-group-text">Limite</label>
                            <input
                                id="txtCantidad"
                                type="number"
                                value={numberValue}
                                onChange={handleNumberChange}
                                className="form-control cantidad"
                            />
                            <button type="submit" className="btn btn-primary">
                                Buscar
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button onClick={handleClean} className="btn btn-danger">
                            Limpiar
                        </button>   
                    </div>
                </div>
            </form>

        </Fragment>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}