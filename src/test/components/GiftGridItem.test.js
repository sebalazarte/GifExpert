import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GiftGridItem/>', () => {

    const url = 'https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=70a38d38casbobveplnboyjb4ahtzdhdxe3dfv9dztcr6q6d&rid=giphy.gif&ct=g';
    const title = 'Dragon Ball GIF by TOEI Animation UK';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el control correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el texto ', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener una imagen con url y alt', () => {

        const img = wrapper.find('img');
        const {src, alt} = img.props();

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe tener una animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className).toContain('animate__fadeIn');
    });

});