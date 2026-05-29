

type studentprops = {
    name:string;
}

export default function Props({name}:studentprops) {
  return (
    <div>
        <h1 style={{color:'red'}}>Hello {name}</h1>
    </div>
  )
}

// export default function Props2(){
//     return
//     <h1>props 2</h1>
// }
