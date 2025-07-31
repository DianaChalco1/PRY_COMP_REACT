function Formulario({ children, onSubmit }) {
  return (
<form
  onSubmit={onSubmit}
  style={{ backgroundColor: 'pink' }}
  className="p-4 border rounded shadow-sm"
>
  {children}
</form>
  );
}

export default Formulario;
