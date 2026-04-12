'use client';

import { useState, useEffect, useCallback } from 'react';

interface Lead {
    _id: string;
    name: string;
    email: string;
    phone: string;
    organization: string;
    interest: string;
    message: string;
    createdAt: string;
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const [leads, setLeads] = useState<Lead[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedLead, setExpandedLead] = useState<string | null>(null);

    // Check for existing session
    useEffect(() => {
        const savedToken = sessionStorage.getItem('admin_token');
        if (savedToken) {
            setToken(savedToken);
            setIsAuthenticated(true);
        }
    }, []);

    const fetchLeads = useCallback(async (authToken: string) => {
        setIsLoading(true);
        setFetchError('');
        try {
            const res = await fetch('/api/leads', {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            if (res.status === 401) {
                setIsAuthenticated(false);
                sessionStorage.removeItem('admin_token');
                setFetchError('Session expired. Please log in again.');
                return;
            }
            if (!res.ok) throw new Error('Failed to fetch leads');
            const data = await res.json();
            setLeads(data.leads || []);
        } catch (err) {
            console.error(err);
            setFetchError('Failed to load leads. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Fetch leads when authenticated
    useEffect(() => {
        if (isAuthenticated && token) {
            fetchLeads(token);
        }
    }, [isAuthenticated, token, fetchLeads]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoggingIn(true);
        setLoginError('');

        try {
            const res = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok && data.token) {
                setToken(data.token);
                setIsAuthenticated(true);
                sessionStorage.setItem('admin_token', data.token);
            } else {
                setLoginError(data.error || 'Invalid credentials');
            }
        } catch {
            setLoginError('Connection error. Please try again.');
        } finally {
            setIsLoggingIn(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setToken('');
        setLeads([]);
        sessionStorage.removeItem('admin_token');
        setUsername('');
        setPassword('');
    };

    const filteredLeads = leads.filter((lead) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return (
            lead.name?.toLowerCase().includes(q) ||
            lead.email?.toLowerCase().includes(q) ||
            lead.phone?.includes(q) ||
            lead.organization?.toLowerCase().includes(q) ||
            lead.interest?.toLowerCase().includes(q)
        );
    });

    const formatDate = (dateStr: string) => {
        try {
            return new Date(dateStr).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
        } catch {
            return dateStr;
        }
    };

    const interestColor = (interest: string) => {
        switch (interest) {
            case 'Training': return { bg: 'rgba(52, 211, 153, 0.15)', text: '#34D399', border: 'rgba(52, 211, 153, 0.3)' };
            case 'Product': return { bg: 'rgba(96, 165, 250, 0.15)', text: '#60A5FA', border: 'rgba(96, 165, 250, 0.3)' };
            case 'Consultation': return { bg: 'rgba(251, 191, 36, 0.15)', text: '#FBBF24', border: 'rgba(251, 191, 36, 0.3)' };
            case 'Lab Setup': return { bg: 'rgba(244, 114, 182, 0.15)', text: '#F472B6', border: 'rgba(244, 114, 182, 0.3)' };
            default: return { bg: 'rgba(156, 163, 175, 0.15)', text: '#9CA3AF', border: 'rgba(156, 163, 175, 0.3)' };
        }
    };

    // ==================== LOGIN SCREEN ====================
    if (!isAuthenticated) {
        return (
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)',
                    fontFamily: "'Geist', 'Inter', system-ui, -apple-system, sans-serif",
                    padding: '20px',
                }}
            >
                {/* Decorative background elements */}
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'radial-gradient(circle at 20% 80%, rgba(107, 193, 227, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.06) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }} />

                <div style={{
                    width: '100%',
                    maxWidth: '420px',
                    position: 'relative',
                }}>
                    {/* Logo / Title */}
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '16px',
                            background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 16px', boxShadow: '0 8px 32px rgba(251, 191, 36, 0.3)',
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A1C26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h1 style={{ color: '#F4F7F9', fontSize: '24px', fontWeight: 600, margin: '0 0 4px' }}>
                            Admin Panel
                        </h1>
                        <p style={{ color: 'rgba(244, 247, 249, 0.5)', fontSize: '14px', margin: 0 }}>
                            MCAD Solutions — Lead Management
                        </p>
                    </div>

                    {/* Login Card */}
                    <form
                        onSubmit={handleLogin}
                        style={{
                            background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.7) 0%, rgba(0, 0, 0, 0.8) 100%)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '16px',
                            padding: '32px',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
                        }}
                    >
                        {/* Username */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#F4F7F9', fontSize: '13px', fontWeight: 500, marginBottom: '8px', letterSpacing: '0.3px' }}>
                                Username
                            </label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    style={{
                                        width: '100%', padding: '12px 14px', fontSize: '15px',
                                        background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '10px', color: '#F4F7F9', outline: 'none',
                                        transition: 'border-color 0.2s',
                                        boxSizing: 'border-box',
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = 'rgba(107, 193, 227, 0.5)')}
                                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', color: '#F4F7F9', fontSize: '13px', fontWeight: 500, marginBottom: '8px', letterSpacing: '0.3px' }}>
                                Password
                            </label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    style={{
                                        width: '100%', padding: '12px 14px', fontSize: '15px',
                                        background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '10px', color: '#F4F7F9', outline: 'none',
                                        transition: 'border-color 0.2s',
                                        boxSizing: 'border-box',
                                    }}
                                    onFocus={(e) => (e.target.style.borderColor = 'rgba(107, 193, 227, 0.5)')}
                                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {loginError && (
                            <div style={{
                                padding: '10px 14px', marginBottom: '16px',
                                background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)',
                                borderRadius: '8px', color: '#EF4444', fontSize: '13px',
                            }}>
                                ✗ {loginError}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoggingIn}
                            style={{
                                width: '100%', padding: '13px', fontSize: '15px', fontWeight: 600,
                                background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
                                color: '#0A1C26', border: 'none', borderRadius: '10px',
                                cursor: isLoggingIn ? 'not-allowed' : 'pointer',
                                opacity: isLoggingIn ? 0.7 : 1,
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 16px rgba(251, 191, 36, 0.3)',
                            }}
                        >
                            {isLoggingIn ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ==================== DASHBOARD ====================
    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #071E28 0%, #0A1C26 100%)',
                fontFamily: "'Geist', 'Inter', system-ui, -apple-system, sans-serif",
                color: '#F4F7F9',
            }}
        >
            {/* Header */}
            <header style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                background: 'rgba(7, 30, 40, 0.8)',
                backdropFilter: 'blur(12px)',
                position: 'sticky', top: 0, zIndex: 50,
            }}>
                <div style={{
                    maxWidth: '1400px', margin: '0 auto',
                    padding: '16px 32px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '10px',
                            background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A1C26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <div>
                            <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Lead Management</h1>
                            <p style={{ margin: 0, fontSize: '12px', color: 'rgba(244, 247, 249, 0.4)' }}>MCAD Solutions Admin</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '8px 20px', fontSize: '13px', fontWeight: 500,
                            background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '8px', color: '#EF4444', cursor: 'pointer',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; }}
                    >
                        Sign Out
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px' }}>
                {/* Stats Bar */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    marginBottom: '32px',
                }}>
                    {[
                        { label: 'Total Leads', value: leads.length, color: '#6BC1E3', icon: '📋' },
                        { label: 'Training', value: leads.filter(l => l.interest === 'Training').length, color: '#34D399', icon: '🎓' },
                        { label: 'Product Demo', value: leads.filter(l => l.interest === 'Product').length, color: '#60A5FA', icon: '💻' },
                        { label: 'Consultation', value: leads.filter(l => l.interest === 'Consultation').length, color: '#FBBF24', icon: '💬' },
                    ].map((stat, i) => (
                        <div key={i} style={{
                            background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            borderRadius: '14px', padding: '20px 24px',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '13px', color: 'rgba(244, 247, 249, 0.5)', fontWeight: 500 }}>{stat.label}</span>
                                <span style={{ fontSize: '20px' }}>{stat.icon}</span>
                            </div>
                            <span style={{ fontSize: '32px', fontWeight: 700, color: stat.color }}>{stat.value}</span>
                        </div>
                    ))}
                </div>

                {/* Search + Refresh Bar */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: '20px', gap: '16px', flexWrap: 'wrap',
                }}>
                    <div style={{ position: 'relative', flex: '1', minWidth: '240px', maxWidth: '400px' }}>
                        <svg
                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(244, 247, 249, 0.3)"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
                        >
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by name, email, phone..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', padding: '11px 14px 11px 44px', fontSize: '14px',
                                background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '10px', color: '#F4F7F9', outline: 'none',
                                transition: 'border-color 0.2s',
                                boxSizing: 'border-box',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = 'rgba(107, 193, 227, 0.4)')}
                            onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '13px', color: 'rgba(244, 247, 249, 0.4)' }}>
                            {filteredLeads.length} result{filteredLeads.length !== 1 ? 's' : ''}
                        </span>
                        <button
                            onClick={() => fetchLeads(token)}
                            disabled={isLoading}
                            style={{
                                padding: '10px 20px', fontSize: '13px', fontWeight: 500,
                                background: 'rgba(107, 193, 227, 0.1)', border: '1px solid rgba(107, 193, 227, 0.25)',
                                borderRadius: '8px', color: '#6BC1E3', cursor: 'pointer',
                                opacity: isLoading ? 0.6 : 1, transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.background = 'rgba(107, 193, 227, 0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(107, 193, 227, 0.1)'; }}
                        >
                            {isLoading ? '↻ Loading...' : '↻ Refresh'}
                        </button>
                    </div>
                </div>

                {/* Error */}
                {fetchError && (
                    <div style={{
                        padding: '14px 18px', marginBottom: '20px',
                        background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)',
                        borderRadius: '10px', color: '#EF4444', fontSize: '14px',
                    }}>
                        {fetchError}
                    </div>
                )}

                {/* Leads Table */}
                {isLoading && leads.length === 0 ? (
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', padding: '80px 20px',
                        color: 'rgba(244, 247, 249, 0.4)',
                    }}>
                        <div style={{
                            width: '40px', height: '40px', border: '3px solid rgba(107, 193, 227, 0.2)',
                            borderTop: '3px solid #6BC1E3', borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                        }} />
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                        <p style={{ marginTop: '16px', fontSize: '14px' }}>Loading leads...</p>
                    </div>
                ) : filteredLeads.length === 0 ? (
                    <div style={{
                        textAlign: 'center', padding: '80px 20px',
                        color: 'rgba(244, 247, 249, 0.4)',
                    }}>
                        <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>📭</span>
                        <p style={{ fontSize: '16px', margin: '0 0 4px' }}>
                            {searchQuery ? 'No leads match your search' : 'No leads yet'}
                        </p>
                        <p style={{ fontSize: '13px', margin: 0 }}>
                            {searchQuery ? 'Try a different search term' : 'Leads from the contact form will appear here'}
                        </p>
                    </div>
                ) : (
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '14px', overflow: 'hidden',
                    }}>
                        {/* Table Header */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 2fr 1.5fr 1.5fr 1fr 1.5fr',
                            padding: '14px 24px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                            fontSize: '12px', fontWeight: 600, color: 'rgba(244, 247, 249, 0.4)',
                            textTransform: 'uppercase', letterSpacing: '0.5px',
                        }}>
                            <span>Name</span>
                            <span>Email</span>
                            <span>Phone</span>
                            <span>Organization</span>
                            <span>Interest</span>
                            <span>Date</span>
                        </div>

                        {/* Desktop Table Rows */}
                        <div className="admin-desktop-table">
                            {filteredLeads.map((lead) => {
                                const colors = interestColor(lead.interest);
                                return (
                                    <div
                                        key={lead._id}
                                        onClick={() => setExpandedLead(expandedLead === lead._id ? null : lead._id)}
                                        style={{
                                            borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                                            cursor: 'pointer',
                                            transition: 'background 0.15s',
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                                    >
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '2fr 2fr 1.5fr 1.5fr 1fr 1.5fr',
                                            padding: '16px 24px',
                                            alignItems: 'center',
                                            fontSize: '14px',
                                        }}>
                                            <span style={{ fontWeight: 500 }}>{lead.name}</span>
                                            <span style={{ color: '#6BC1E3' }}>{lead.email}</span>
                                            <span style={{ color: 'rgba(244, 247, 249, 0.7)' }}>{lead.phone}</span>
                                            <span style={{ color: 'rgba(244, 247, 249, 0.6)' }}>{lead.organization || '—'}</span>
                                            <span>
                                                <span style={{
                                                    display: 'inline-block', padding: '3px 10px',
                                                    borderRadius: '6px', fontSize: '12px', fontWeight: 500,
                                                    background: colors.bg, color: colors.text,
                                                    border: `1px solid ${colors.border}`,
                                                }}>
                                                    {lead.interest}
                                                </span>
                                            </span>
                                            <span style={{ color: 'rgba(244, 247, 249, 0.5)', fontSize: '13px' }}>
                                                {formatDate(lead.createdAt)}
                                            </span>
                                        </div>

                                        {/* Expanded message */}
                                        {expandedLead === lead._id && lead.message && (
                                            <div style={{
                                                padding: '0 24px 16px',
                                                borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                                            }}>
                                                <div style={{
                                                    marginTop: '12px',
                                                    padding: '14px 18px',
                                                    background: 'rgba(107, 193, 227, 0.05)',
                                                    border: '1px solid rgba(107, 193, 227, 0.1)',
                                                    borderRadius: '10px',
                                                }}>
                                                    <span style={{
                                                        display: 'block', fontSize: '11px', fontWeight: 600,
                                                        color: 'rgba(244, 247, 249, 0.4)', textTransform: 'uppercase',
                                                        letterSpacing: '0.5px', marginBottom: '6px',
                                                    }}>
                                                        Message
                                                    </span>
                                                    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'rgba(244, 247, 249, 0.8)' }}>
                                                        {lead.message}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mobile Card Rows (shown below 900px via CSS) */}
                        <div className="admin-mobile-cards" style={{ display: 'none' }}>
                            {filteredLeads.map((lead) => {
                                const colors = interestColor(lead.interest);
                                return (
                                    <div
                                        key={lead._id}
                                        style={{
                                            padding: '16px 20px',
                                            borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                            <span style={{ fontWeight: 600, fontSize: '15px' }}>{lead.name}</span>
                                            <span style={{
                                                padding: '2px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 500,
                                                background: colors.bg, color: colors.text, border: `1px solid ${colors.border}`,
                                            }}>
                                                {lead.interest}
                                            </span>
                                        </div>
                                        <p style={{ margin: '4px 0', fontSize: '13px', color: '#6BC1E3' }}>{lead.email}</p>
                                        <p style={{ margin: '4px 0', fontSize: '13px', color: 'rgba(244,247,249,0.6)' }}>{lead.phone}</p>
                                        {lead.organization && (
                                            <p style={{ margin: '4px 0', fontSize: '13px', color: 'rgba(244,247,249,0.5)' }}>{lead.organization}</p>
                                        )}
                                        {lead.message && (
                                            <p style={{ margin: '8px 0 4px', fontSize: '13px', color: 'rgba(244,247,249,0.7)', fontStyle: 'italic' }}>
                                                &ldquo;{lead.message}&rdquo;
                                            </p>
                                        )}
                                        <p style={{ margin: '8px 0 0', fontSize: '12px', color: 'rgba(244,247,249,0.35)' }}>
                                            {formatDate(lead.createdAt)}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </main>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 900px) {
                    .admin-desktop-table,
                    div[style*="gridTemplateColumns: '2fr 2fr"] {
                        display: none !important;
                    }
                    .admin-mobile-cards {
                        display: block !important;
                    }
                }
            `}</style>
        </div>
    );
}
