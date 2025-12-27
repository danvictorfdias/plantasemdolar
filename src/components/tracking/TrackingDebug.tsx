import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { gtmLoader } from '../../lib/gtmLoader';

interface TrackingEvent {
  id: string;
  timestamp: number;
  type: 'click' | 'redirect';
  destination: string;
  location: string;
  status: 'pending' | 'success' | 'error';
}

export default function TrackingDebug() {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<TrackingEvent[]>([]);
  const [gtmStatus, setGtmStatus] = useState<'loaded' | 'loading' | 'pending'>('pending');

  useEffect(() => {
    const checkGTMStatus = setInterval(() => {
      setGtmStatus(gtmLoader.getStatus());
    }, 500);

    return () => clearInterval(checkGTMStatus);
  }, []);

  useEffect(() => {
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    console.log = (...args: unknown[]) => {
      originalConsoleLog(...args);

      const message = args.join(' ');
      if (message.includes('[TRACKING]') || message.includes('[REDIRECT]')) {
        const event: TrackingEvent = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
          type: message.includes('[REDIRECT]') ? 'redirect' : 'click',
          destination: extractDestination(args),
          location: extractLocation(args),
          status: message.includes('✅') ? 'success' : 'pending',
        };

        setEvents(prev => [event, ...prev].slice(0, 10));
      }
    };

    console.error = (...args: unknown[]) => {
      originalConsoleError(...args);

      const message = args.join(' ');
      if (message.includes('[TRACKING]')) {
        const event: TrackingEvent = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
          type: 'click',
          destination: 'Error',
          location: 'Error',
          status: 'error',
        };

        setEvents(prev => [event, ...prev].slice(0, 10));
      }
    };

    return () => {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border-2 border-green-600 rounded-lg shadow-2xl p-4 max-w-md w-full z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Rastreamento de Cliques
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <EyeOff className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-3 p-2 bg-gray-50 rounded border border-gray-200">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-gray-700">Status GTM:</span>
          <span
            className={`px-2 py-1 rounded font-semibold ${
              gtmStatus === 'loaded'
                ? 'bg-green-100 text-green-800'
                : gtmStatus === 'loading'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {gtmStatus === 'loaded' ? '✓ Ativo' : gtmStatus === 'loading' ? '⏳ Carregando' : '○ Aguardando'}
          </span>
        </div>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {events.length === 0 ? (
          <p className="text-xs text-gray-500 text-center py-4">
            Nenhum clique registrado ainda
          </p>
        ) : (
          events.map(event => (
            <div
              key={event.id}
              className={`p-2 rounded text-xs border ${
                event.status === 'success'
                  ? 'bg-green-50 border-green-200'
                  : event.status === 'error'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-yellow-50 border-yellow-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold">
                  {event.type === 'redirect' ? '🚀' : '🖱️'} {event.type}
                </span>
                <span className="text-gray-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="text-gray-700">
                <div className="truncate">
                  <strong>Destino:</strong> {event.destination}
                </div>
                <div>
                  <strong>Local:</strong> {event.location}
                </div>
                <div className="mt-1">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                      event.status === 'success'
                        ? 'bg-green-200 text-green-800'
                        : event.status === 'error'
                        ? 'bg-red-200 text-red-800'
                        : 'bg-yellow-200 text-yellow-800'
                    }`}
                  >
                    {event.status === 'success'
                      ? '✅ Registrado'
                      : event.status === 'error'
                      ? '❌ Erro'
                      : '⏳ Processando'}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function extractDestination(args: unknown[]): string {
  const str = JSON.stringify(args);
  const match = str.match(/"(?:destino|url_com_utm|url)":\s*"([^"]+)"/);
  return match ? match[1] : 'N/A';
}

function extractLocation(args: unknown[]): string {
  const str = JSON.stringify(args);
  const match = str.match(/"(?:localização|location)":\s*"([^"]+)"/);
  return match ? match[1] : 'N/A';
}
