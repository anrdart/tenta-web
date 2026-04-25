'use client';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
}

export default function FormField({ label, name, type = 'text', value, onChange, error, placeholder, required, options }: FormFieldProps) {
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', border: `2px solid ${error ? '#991B1B' : '#E8DFD0'}`,
    borderRadius: 10, fontSize: 14, outline: 0, fontFamily: 'inherit', background: '#FFFDF9',
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: '#231A10' }}>
        {label}{required && <span style={{ color: '#991B1B' }}> *</span>}
      </label>
      {type === 'textarea' ? (
        <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} required={required}
          style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} />
      ) : options ? (
        <select name={name} value={value} onChange={onChange as any} style={inputStyle}>
          {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} style={inputStyle} />
      )}
      {error && <div style={{ fontSize: 12, color: '#991B1B', marginTop: 4 }}>{error}</div>}
    </div>
  );
}
