import {  Button } from '@arco-design/web-react';
import { useEffect } from 'react';
const div1 = document.createElement("div"); div1.innerText='爱你孤身走暗巷';
const div2 = document.createElement("div"); div2.innerText='！爱你不跪的模样！';
const div3 = document.createElement("div"); div3.innerText='！！爱你对峙过绝望！！';
const div4 = document.createElement("div"); div4.innerText='不肯哭一场';
const div5 = document.createElement("div"); div5.innerText='！！！爱你和我那么像，缺口都一样！！！';


const Time=()=>{
    useEffect(()=>{
      let dom = document.getElementById("father")
      setTimeout(() => {dom.appendChild(div1)}, 1000);
      setTimeout(() => {dom.appendChild(div2)}, 2000);
      setTimeout(() => {dom.appendChild(div3)}, 3000);
      setTimeout(() => {dom.appendChild(div4)}, 4000);
      setTimeout(() => {dom.appendChild(div5)}, 10000);
    },[])
    
  return <div id='father'>
    <Button type="primary"> click </Button>
  </div>
}
export default Time