import { useNavigate } from 'react-router-dom';
import img from '../assets/404.png';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <img
                src={img}
                alt="Página no encontrada"
                className="w-full max-w-2xl h-auto object-contain mb-8"
            />

            <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-lg font-medium"
            >
                Volver al Inicio
            </button>

        </div>
    );
}