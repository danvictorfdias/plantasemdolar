import { useState, useEffect } from 'react';
import { getUTMParams, UTMParams } from '../utils/utm';

export function useUTMParams(): UTMParams {
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    const params = getUTMParams();
    setUtmParams(params);
  }, []);

  return utmParams;
}
