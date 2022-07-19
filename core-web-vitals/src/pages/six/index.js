import { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Image,Spin } from '@arco-design/web-react';
const FormItem = Form.Item;

const Six=()=>{
  const [loading1, setLoading1] = useState(true);
  const [spinLoading, setSpinLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {setSpinLoading(false)}, 1000);
    setTimeout(() => {setLoading1(false)}, 3000);
  },[])
  function onClickBtn1(){
    console.log('do nothing')
  }

  return <div>
    <div>
    {/*
    通过一张图来展示
    FCP  随便有点什么
    LCP  要有小的-》有大的-》再有小一点的

    通过一个表格来说
    FID  有一个button，点击之后写一个等待30秒，然后对用户输入作出反应
    TTL  写一个button，开始后2秒钟才能交互 done
    TBT  TTL-FCP，就是阻塞的时间。 done

    通过一个视频来说
    CLS  写一个button，过段时间他自己移动。 */}

    <div>
      
    </div>

    <div style={{display:'inline-block', width: 400 }}>
    <Spin loading={spinLoading}>
      <Form style={{width:400}}>
        <FormItem label='Username'>
          <Input placeholder='please enter your username...' />
        </FormItem>
        <FormItem label='Post'>
          <Input placeholder='please enter your post...' />
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Checkbox>I have read the manual</Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type='primary'loading={loading1}>Submit</Button>
        </FormItem>
      </Form> 
    </Spin>
    </div>


        
    
    </div>

  </div>
}
export default Six