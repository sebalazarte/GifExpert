import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
import '@testing-library/jest-dom';

describe('Pruebas en el componente <GifGrid/>', () => {

    const category = 'goku';
    const limit = "10";

    test('Debe mostrar el control correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} limit={limit} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imagenes en useFetchGifs', () => {


        const gifs = [
            {
                id: '123456',
                title: 'Dragon Ball GIF by TOEI Animation UK',
                url: 'https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=70a38d38casbobveplnboyjb4ahtzdhdxe3dfv9dztcr6q6d&rid=giphy.gif&ct=g'
            },
            {
                id: '123456',
                title: 'Dragon Ball GIF by TOEI Animation UK',
                url: 'https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=70a38d38casbobveplnboyjb4ahtzdhdxe3dfv9dztcr6q6d&rid=giphy.gif&ct=g'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} limit={limit} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});