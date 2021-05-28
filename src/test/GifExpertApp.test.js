import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas con el componente principal', () => {
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One punch', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});