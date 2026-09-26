import React, { useState } from 'react';
import { Eye, EyeOff, LockKeyhole, Mail, UserRound, UtensilsCrossed, Loader2 } from 'lucide-react';
import { supabase } from '../services/supabase';

interface AuthPageProps {
  onAuthenticated: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onAuthenticated }) => {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isSignup = mode === 'signup';

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setMessage('');

    const cleanEmail = email.trim().toLowerCase();
    if (isSignup && name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setBusy(true);
    try {
      if (isSignup) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: { data: { full_name: name.trim() } },
        });
        if (signUpError) throw signUpError;

        if (data.session) {
          onAuthenticated();
        } else {
          setMessage('Account created. Please check your email and confirm your account, then log in.');
          setMode('login');
        }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });
        if (signInError) throw signInError;
        onAuthenticated();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#FFF3D6_0%,#FFFDF9_42%,#F7EFE5_100%)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 w-16 h-16 rounded-3xl bg-[#D39A29] text-white flex items-center justify-center shadow-xl">
            <UtensilsCrossed className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-[#24180E]">भारत की थाली</h1>
          <p className="text-sm text-stone-600 mt-1">Bharat Ki Thali 2.0 • A Suraj Rai Creation</p>
        </div>

        <div className="bg-white/95 border border-[#D39A29]/20 rounded-3xl shadow-2xl p-5 sm:p-7">
          <div className="flex p-1 bg-stone-100 rounded-2xl mb-6">
            <button type="button" onClick={() => { setMode('signup'); setError(''); setMessage(''); }}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition ${isSignup ? 'bg-[#D39A29] text-white shadow' : 'text-stone-600'}`}>
              Sign Up
            </button>
            <button type="button" onClick={() => { setMode('login'); setError(''); setMessage(''); }}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition ${!isSignup ? 'bg-[#D39A29] text-white shadow' : 'text-stone-600'}`}>
              Login
            </button>
          </div>

          <div className="mb-5">
            <h2 className="font-heading text-xl font-extrabold text-stone-900">
              {isSignup ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              {isSignup ? 'First time here? Create your personal Bharat Ki Thali profile.' : 'Login to open your saved profile and personal data.'}
            </p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            {isSignup && (
              <label className="block">
                <span className="text-xs font-bold text-stone-700">Full Name</span>
                <div className="relative mt-1.5">
                  <UserRound className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                  <input value={name} onChange={e => setName(e.target.value)} autoComplete="name"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-3 py-3 text-sm outline-none focus:border-[#D39A29] focus:ring-2 focus:ring-[#D39A29]/15"
                    placeholder="Your name" />
                </div>
              </label>
            )}

            <label className="block">
              <span className="text-xs font-bold text-stone-700">Email</span>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" autoComplete="email"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-3 py-3 text-sm outline-none focus:border-[#D39A29] focus:ring-2 focus:ring-[#D39A29]/15"
                  placeholder="you@example.com" />
              </div>
            </label>

            <label className="block">
              <span className="text-xs font-bold text-stone-700">Password</span>
              <div className="relative mt-1.5">
                <LockKeyhole className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'}
                  autoComplete={isSignup ? 'new-password' : 'current-password'}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-11 py-3 text-sm outline-none focus:border-[#D39A29] focus:ring-2 focus:ring-[#D39A29]/15"
                  placeholder="Minimum 6 characters" />
                <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-3 top-2.5 p-1 text-stone-400">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </label>

            {error && <div className="rounded-xl bg-red-50 border border-red-200 px-3 py-2.5 text-xs font-semibold text-red-700">{error}</div>}
            {message && <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2.5 text-xs font-semibold text-emerald-700">{message}</div>}

            <button disabled={busy} type="submit"
              className="w-full rounded-xl bg-[#D39A29] hover:bg-[#B9821F] disabled:opacity-60 text-white font-extrabold py-3 flex items-center justify-center gap-2 shadow-lg shadow-[#D39A29]/20">
              {busy && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSignup ? 'Create Account' : 'Login to My Profile'}
            </button>
          </form>

          <p className="text-center text-[11px] text-stone-400 mt-5">
            Your personal data is stored in your own account and protected by row-level security.
          </p>
        </div>
      </div>
    </div>
  );
};
