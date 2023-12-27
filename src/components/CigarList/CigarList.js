import { generateTable } from '../../JSUtils';

export const CigarList = () => {
    return <div>{generateTable(headers, cigars, keys, null)}</div>;
};

const cigars = [
    {
        manufacturer: 'Cigars Inc.',
        brand: 'Cigar Brand',
        strength: 'Mild',
        color: 'Claro',
        shape: 'Toro',
        length: '5',
        ringSize: 18,
    },
    {
        manufacturer: 'Don Pepin Garcia',
        brand: 'Original Exquisitos',
        strength: 'Full',
        color: 'Oscuro',
        shape: 'Culebra',
        length: '4',
        ringSize: 18,
    },
];
const headers = ['Manufacturer', 'Brand', 'Strength', 'Color', 'Shape', 'Length (in)', 'Ring Size'];
const keys = ['manufacturer', 'brand', 'strength', 'color', 'shape', 'length', 'ringSize'];
