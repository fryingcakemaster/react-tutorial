// 项目的根组件
// App -> index.js -> public/index.html(root)

const count = 100;
function getName() {
  return "React";
}

function App() {
  return (
    <div className="App">
      This is the App!
      {'this is message'}
      {count}
      {getName()}
      {new Date().getDate()}
      <div style={{color: "red"}}> this is div</div>
    </div>
  );
}

export default App;
