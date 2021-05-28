import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch', 10));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imagen y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('goku', 10));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });


    
});