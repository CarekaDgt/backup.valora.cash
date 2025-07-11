import { useEffect } from 'react';
import axios from 'axios';

export function useAuditLog(action, payload) {
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_AUDIT_SERVICE_URL}/audit`, {
      action,
      payload,
      timestamp: new Date().toISOString()
    });
  }, [action, payload]);
}
