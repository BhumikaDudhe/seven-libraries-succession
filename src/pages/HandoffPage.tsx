import React, { useState } from 'react';
import { CURRENT_STEWARD, NEXT_STEWARD } from '../data/mockData';
import { Check, ArrowRight, ShieldCheck, Key, CheckCircle2, RotateCw } from 'lucide-react';

export const HandoffPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const handleRunVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(4);
    }, 2000);
  };

  return (
    <div className="container" style={{ padding: '3.5rem 2rem 6rem', maxWidth: '980px' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <span className="label-caps">Custodial Succession Ceremony</span>
        <h1 style={{ fontSize: '3.2rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>TRANSFER CUSTODIANSHIP</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)' }}>
          Move responsibility without moving the archive.
        </p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '3.5rem',
        padding: '1.5rem',
        background: 'var(--c-charcoal-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--c-charcoal-border)'
      }}>
        {[
          { num: 1, label: 'Choose Successor' },
          { num: 2, label: 'Authorise' },
          { num: 3, label: 'Publish Test' },
          { num: 4, label: 'Verify' },
          { num: 5, label: 'Complete' }
        ].map((s) => (
          <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: step > s.num ? 'var(--c-emerald)' : step === s.num ? 'var(--c-forest-subtle)' : 'rgba(255,255,255,0.05)',
              color: step >= s.num ? '#ffffff' : 'var(--c-ivory-dark)',
              border: step === s.num ? '2px solid var(--c-sage)' : 'none'
            }}>
              {step > s.num ? <Check size={16} /> : `0${s.num}`}
            </div>
            <span style={{
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: step >= s.num ? 'var(--c-ivory)' : 'var(--c-ivory-dark)'
            }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="card-forest" style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span className="label-caps" style={{ color: 'var(--c-sage)' }}>Step 01</span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '4px' }}>Designate the Successor</h2>
              <p style={{ color: 'var(--c-ivory-muted)', fontSize: '0.95rem' }}>
                Select the monastic librarian authorized by the council to assume primary feed publication authority.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                <div className="label-caps" style={{ fontSize: '0.7rem' }}>Current Steward</div>
                <h3 style={{ fontSize: '1.3rem', marginTop: '4px' }}>{CURRENT_STEWARD.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--c-ivory-dark)' }}>{CURRENT_STEWARD.monastery}</p>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--c-sage)' }}>
                <div className="label-caps" style={{ fontSize: '0.7rem', color: 'var(--c-sage)' }}>Next Steward</div>
                <select 
                  style={{
                    width: '100%',
                    background: 'var(--c-charcoal)',
                    border: '1px solid var(--c-charcoal-border)',
                    color: 'var(--c-ivory)',
                    padding: '0.6rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    marginTop: '6px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                  defaultValue="sonam"
                >
                  <option value="sonam">Sonam Tsering (Thikse Gonpa)</option>
                  <option value="lobsang">Lobsang Thubten (Tabo Monastery)</option>
                  <option value="konchok">Konchok Rigzin (Lamayuru Archive)</option>
                </select>
                <p style={{ fontSize: '0.78rem', color: 'var(--c-ivory-dark)', marginTop: '8px' }}>
                  Council Resolution #2026-LAD-04 verified.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button className="btn btn-primary" onClick={() => setStep(2)}>
                Continue to Authorisation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span className="label-caps" style={{ color: 'var(--c-sage)' }}>Step 02</span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '4px' }}>Confirm Transfer of Responsibility</h2>
              <p style={{ color: 'var(--c-ivory-muted)', fontSize: '0.95rem' }}>
                You are transferring publishing responsibility. The shared feed epoch will be updated.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.8rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--c-charcoal-border)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--c-ivory-dark)' }}>Old Publishing Authority:</span>
                <span className="mono">{CURRENT_STEWARD.name} ({CURRENT_STEWARD.publishingAddress.slice(0, 10)}...)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--c-charcoal-border)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--c-ivory-dark)' }}>New Publishing Authority:</span>
                <span className="mono">{NEXT_STEWARD.name} ({NEXT_STEWARD.publishingAddress.slice(0, 10)}...)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--c-ivory-dark)' }}>Catalogue Target:</span>
                <span>Shared Ladakh–Spiti Catalogue (11,842 Records)</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <button className="btn btn-secondary" onClick={() => setStep(1)}>Back</button>
              <button className="btn btn-primary" onClick={() => setStep(3)}>Confirm Transfer & Authorise</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span className="label-caps" style={{ color: 'var(--c-sage)' }}>Step 03</span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '4px' }}>Verify Successor Capability</h2>
              <p style={{ color: 'var(--c-ivory-muted)', fontSize: '0.95rem' }}>
                Ask the successor to publish a harmless test update to confirm feed signature validity before final sign-off.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <Key size={36} color="var(--c-sage)" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Generating Canary Sequence Update</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--c-ivory-muted)', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                A zero-payload timestamp will be signed by Sonam Tsering and submitted to Swarm Bee gateway.
              </p>

              <button 
                className="btn btn-primary" 
                onClick={handleRunVerification}
                disabled={isVerifying}
                style={{ minWidth: '220px' }}
              >
                {isVerifying ? (
                  <>
                    <RotateCw size={16} className="pulse-dot" />
                    Verifying Signature...
                  </>
                ) : (
                  'Run Verification'
                )}
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <button className="btn btn-secondary" onClick={() => setStep(2)}>Back</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span className="label-caps" style={{ color: '#72cca1' }}>Verification Confirmed</span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '4px' }}>All Prerequisites Passed</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(66,159,112,0.1)', padding: '1rem 1.4rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={20} color="#72cca1" />
                <span>Successor can publish to Swarm feed (Signed test payload verified)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(66,159,112,0.1)', padding: '1rem 1.4rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={20} color="#72cca1" />
                <span>Catalogue remains reachable at identical content hash</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(66,159,112,0.1)', padding: '1rem 1.4rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={20} color="#72cca1" />
                <span>Postage batch remains funded by Monastic Trust</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(66,159,112,0.1)', padding: '1rem 1.4rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 size={20} color="#72cca1" />
                <span>Previous steward (Ngawang Dorje) key gracefully revoked</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button className="btn btn-primary" onClick={() => setStep(5)}>
                Complete Handoff
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'var(--c-forest-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              border: '2px solid var(--c-sage)'
            }}>
              <ShieldCheck size={36} color="#72cca1" />
            </div>

            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>HANDOFF COMPLETE</h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--c-ivory)', marginBottom: '1.5rem' }}>
              "Responsibility has moved. The catalogue has not."
            </p>
            <p style={{ color: 'var(--c-ivory-muted)', maxWidth: '540px', margin: '0 auto 2.5rem', fontSize: '0.95rem' }}>
              Sonam Tsering (Thikse Gonpa) is now the verified publishing steward. Ngawang Dorje's 
              nine-year tenure has been formally memorialized in the immutable ledger.
            </p>

            <button className="btn btn-secondary" onClick={() => setStep(1)}>
              Reset Demonstration Flow
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
