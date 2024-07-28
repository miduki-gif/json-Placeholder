import axios from "axios";
//axiosのthenのところではデータを取得した後に実行する関数を設定することができる。
//引数には取得したデータが入ってくる。
export default function App() {
  //catchはデータの取得に失敗したときに表示するもの
  const onClickUsers = () =>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  };
  const onClickUser1 = () =>{
    axios.get("https://jsonplaceholder.typicode.com/users/3").then((res) =>{
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  }
  return(
    <div>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>idが1のusers</button>
    </div>
  );
}
