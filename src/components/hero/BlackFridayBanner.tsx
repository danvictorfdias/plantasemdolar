import { memo } from 'react';

function BlackFridayBanner() {
    // Get current date in Brazilian Portuguese format
    const getCurrentDate = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleDateString('pt-BR', { month: 'long' });
        return `${day} de ${month}`;
    };

    return (
        <div className="bg-black text-white py-3 px-4 text-center relative z-10">
            <p className="text-sm md:text-base leading-tight">
                Último dia com preço especial. Somente{' '}
                <strong className="font-extrabold" style={{ color: '#FDD835' }}>HOJE</strong>,{' '}
                <strong className="font-extrabold" style={{ color: '#FDD835' }}>{getCurrentDate()}</strong>
            </p>
        </div>
    );
}

export default memo(BlackFridayBanner);
