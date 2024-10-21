// src/components/Button.jsx
export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#0070f3',
        color: 'white',
        fontSize: 26
      }}
    >
      {children}
    </button>
  );
}