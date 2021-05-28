import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    const [categorias, setCategorias] = useState(defaultCategories);
    const [limite, setLimite] = useState(10);

    return (
        <Fragment>
            <h1>Gif Expert App</h1>
            <hr />
            <AddCategory setCategorias={setCategorias} 
                         setLimite={setLimite} />
            <ol>
                {
                    categorias.map(categoria => (
                        // return (<li key={categoria}> {categoria} </li>);
                         <GifGrid 
                            key={categoria}
                            category={categoria}
                            limit={limite}
                            />
                    ))
                }
            </ol>

        </Fragment>);

}

export default GifExpertApp



