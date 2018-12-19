import React from 'react';
import manageBand from './manageBand';

describe('manageBand', () => {
    it ('initializes state.band to empty array', () => {
        let action = { type: '@@INIT' };
        expect(manageBand(undefined, action)).toEqual({ bands: [] });
    });
    it ('adds as a band with the correct name and id', () => {
        let action = { type: 'ADD_BAND', name: 'Pat the Bunny' };
        let result = manageBand({ bands: [] }, action);

        expect(result.bands).toBeDefined();
        expect(result.bands.length).toBe(1);

        let band = result.bands[0];

        expect(band.name).toBeDefined();
        expect(band.name).toEqual(action.name);
        expect(band.id).toBeDefined();
    });
    it ('deletes a band from state', () => {
        let mockState = {
            bands: [
                { id: 1, name: 'Pat the Bunny' },
                { id: 2, name: 'Ramshackle Glory' }
            ]
        };
        let action = { type: 'DELETE_BAND', id: mockState.bands[0].id };

        let result = manageBand(mockState, action);
        expect(result.bands.length).toBe(mockState.bands.length - 1);
        expect(result.bands).not.toContain(mockState[0]);
    });
});
