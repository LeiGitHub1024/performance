import { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Image,Spin,Switch } from '@arco-design/web-react';
const FormItem = Form.Item;

const Six=()=>{
  const [loading1, setLoading1] = useState(true);
  const [spinLoading, setSpinLoading] = useState(true);
  const [switchChecked, setSwitchChecked] = useState(false);

  useEffect(()=>{
    setTimeout(() => {setSpinLoading(false)}, 1000);
    setTimeout(() => {setLoading1(false)}, 3000);
  },[])
  function clickSwitch(){
    console.log(switchChecked)
    setTimeout(() => {
      setSwitchChecked(p=>!p)
    }, 1000);
  }
  const [form] = Form.useForm();

  return <div>
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
    <Image width={1000} src='https://raw.githubusercontent.com/LeiGitHub1024/performance/master/images/fcp.png'alt='lamp'></Image>

    </div>

    <div style={{display:'inline-block', width: 600,margin:100,border:'solid 2px grey' }}>
    <Spin loading={spinLoading}>
      <Form  form={form} style={{width:600}}>
        <FormItem label='FID'>
          <Switch checked={switchChecked} onChange={clickSwitch}/>
        </FormItem>
        <FormItem label='CLS' field='cls' required rules={[
          {
            validator(value, cb) {
              if (value !== '铂雨yyds') {
                return cb('必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds，必须填写铂雨yyds');
              }
              return cb();
            },
          },
        ]}>
          <Input placeholder='这是一个只能输入铂雨yyds的输入框' />
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Checkbox>I have known what is WebVitals </Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type='primary'loading={loading1}>Submit</Button>
        </FormItem>
      </Form> 
    </Spin>
    </div>

    
        
    

  </div>
}
export default Six