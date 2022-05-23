console.log("probando")

// React y ReactDOM

const myPageDOM = document.querySelector("#mi-pagina")
const root = ReactDOM.createRoot(myPageDOM) // crea el DOM virtual en myPageDOM

// const someInfo = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: "Jorge"
//     }),
//     React.createElement("p", {
//       children: "Bienvenidos a mi pagina fea"
//     }),
//     React.createElement("p", {
//       children: `la fecha actual es ${Date.now()}`
//     })
//   ]
// })


// JSX => JSX es una syntaxis nata de JS que uni JS con XML

let myName = "Jorge"

// const someInfo = (
//   <header id="header">
//     <h1 id="title">{myName}</h1>
//     <p>Bienvenidos a mi pagina fea</p>
//     <p>la fecha actual es {Date.now()}</p>
//   </header>
// )

// COMPONENTE

// ! los componentes deben crearse con PascalCasing
function SomeFunction() {

  return (
    <header id="header">
      <h1 id="title">{myName}</h1>
      <p>Bienvenidos a mi pagina fea</p>
      <p>la fecha actual es {Date.now()}</p>
      <li></li>
    </header>
  )
}

class SomeClass extends React.Component {

  // <> ... </> son fragmentos de React cuando no queremos envolver el contenido de un JSX en una etiqueta.

  render() {
    return (
      <>
        <h3>Esto es un componente clase</h3>
        <SomeFunction />
        <SomeFunction />
        <SomeFunction />
      </>
    )
  }

}
// ! los componentes deben retornar una sola etiqueta de JSX => dentro pueden tener varias

root.render( 
  <div>
    <SomeClass />
  </div> 
)
