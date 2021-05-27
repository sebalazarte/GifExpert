import { getGifts } from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {
    
    test('Debe de traer por defeto 10 elementos ', async() => {
        const gifs = await getGifts('goku');
        expect(gifs.length).toBe(10);
    });
});