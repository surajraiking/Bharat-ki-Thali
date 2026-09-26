import React, { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Loader2 } from 'lucide-react';
import { supabase } from '../services/supabase';
import { AuthPage } from './AuthPage';
import { AppProvider } from '../context/AppContext';
import App from '../App';

export const AuthGate: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      setReady(true);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!mounted) return;
      setSession(nextSession);
      setReady(true);
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!ready) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FFFDF9] text-[#D39A29]"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  }

  if (!session?.user) return <AuthPage onAuthenticated={() => undefined} />;

  return (
    <AppProvider user={session.user}>
      <App />
    </AppProvider>
  );
};
