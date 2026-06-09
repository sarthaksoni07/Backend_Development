
export default function Loading() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    padding: '16px'
  };

  const spinnerStyle = {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  // Inline stylesheet injector for the rotation keyframes
  const keyframesStyle = (
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  );

  return (
    <div style={containerStyle}>
      {keyframesStyle}
      <div style={spinnerStyle} role="status">
        <span style={{ display: 'none' }}>Loading...</span>
      </div>
    </div>
  );
}