const Icon = ({ icon, size }: any) => {
  const heightAndWidth = `${size}px`;
  const fontSize = `${size * 0.9}px`
  return (
    <div style={{ height: heightAndWidth, width: heightAndWidth, fontSize, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {icon}
    </div>
  )
}
export default Icon;