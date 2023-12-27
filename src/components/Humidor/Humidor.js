import { AddToHumidorButton, HumidorImageButton } from './index';
import { CigarList } from '../CigarList';

export const Humidor = () => {
    return (
        <div className="page humidor">
            <div className="humidor-content-container">
                <div className="humidor-buttons-container">
                    <AddToHumidorButton />
                    <HumidorImageButton />
                </div>
                <div className="humidor-cigar-list-container">
                    <h2>My Cigars</h2>
                    <CigarList />
                </div>
            </div>
        </div>
    );
};
