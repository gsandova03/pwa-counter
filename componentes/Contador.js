const Contador = () =>{

  const [state , setState] = React.useState(0);

  const handleAdd = () =>{
    setState(state + 1)
  }

  const handleRes = () =>{
    setState(state - 1)
  }
  return (
    <div>
      <h1>Contador : <p className={ state < 0 ? "menor" : "mayor" }>{state}</p></h1>
      <hr/>

      <button onClick={handleAdd}>Aumentar</button>
      <button onClick={handleRes}>Disminuir</button>
    </div>
  )
}