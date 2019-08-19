import {noop} from './utils';

describe('noop', () => {
    it('should be a function', () => {
        expect(typeof noop).toBe('function')
    });
    it('should return undefined', () => {
        expect(noop()).toBe(undefined);
    });
});