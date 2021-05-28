import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en el componente <AddCategory/>', () => {

    const setCategorias = jest.fn();
    const setLimite = jest.fn();

    let wraper = shallow(
        <AddCategory setCategorias={setCategorias} setLimite={setLimite} />);


    beforeEach(() => {
        jest.clearAllMocks();
        wraper = shallow(
            <AddCategory setCategorias={setCategorias} setLimite={setLimite} />);
    });

    test('Debe mostrarse correctamente', () => {
        expect(wraper).toMatchSnapshot();
    });

    test('Debe de cambiar el input[text]', () => {
        const input = wraper.find('#txtBuscar');
        const value = 'hola mundo';
        input.simulate('change', {
            target: { value }
        });

    });

    test('No debe llamar a submit si el Input text no tiene valor', () => {
        wraper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategorias).not.toHaveBeenCalled();
    });

    test('Debe de llamar SetCategorias y limpiar el Input[Text] ', () => {
        
        //1. simular el input change
        const input = wraper.find('#txtBuscar');
        const value = 'hola mundo';
        input.simulate('change', {
            target: { value }
        });

        //2. simular el submit
        wraper.find('form').simulate('submit', { preventDefault() { } });
        
        //3.SetCategorias se debe haber llamado
        expect(setCategorias).toHaveBeenCalled();
        expect(setCategorias).toHaveBeenCalledTimes(1);
        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));

        //4. El valor el input debe estar vacio
        expect(input.prop('value')).toBe('');
    });

});