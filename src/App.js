import React from 'react'
import Foo from './foo/foo'

function App() {
  let hochts = [
    { id: 1, completed: false, title: 'Алисочку хочетсо...' },
    { id: 2, completed: false, title: 'Сакуечку хочетсо...' },
    { id: 3, completed: false, title: 'Цырночку хочетсо...' }
  ]

  function ToggleHochts(id) {
    hochts = hochts.map(hochts => {
      if (hochts.id === id) {
        hochts.completed = !hochts.completed
      }
      return hochts

    })
  }
  return (
    <div className="wrapper">
      <h1> sexo</h1>

      <Foo hochts={hochts} onToggle={ToggleHochts} />
    </div >
  );
}


export default App;
