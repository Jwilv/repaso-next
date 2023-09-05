
export const DarkLayout = ( {children} ) => {
  return (
    <div
    style={{
        backgroundColor: 'rgba(82, 79, 79, 0.3)',
        padding:'20px',
        borderRadius: '5px',
    }}
    >
        <h3>DarkLayout</h3>
        { children }
    </div>
  )
}
