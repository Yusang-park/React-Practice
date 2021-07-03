import React, {useState} from 'react';

function InputBox() {

    const [text, setText] = useState(
{
    nickname :"",
    realname : "",

}
    );

    const inputBoxStyle = {
        color:'red',
    };


    const onChange = (e) => {
        //TODO: 여기는 {}이다. 왜일까?
        const {value, name} = e.target;
        setText(
            {...text,
            [name]: value}
            
        )  ;
    }

    const onClickReset = (e) =>{
        setText('');
        e.target.value = ''
    }

    return (
        <div>
            <h3 style={inputBoxStyle}>
Below is a input box!
            </h3>
            <input onChange={onChange} name="realname" placeholder="realname"></input>
            <input onChange={onChange} name="nickname" placeholder="nickname"></input>
      
            <h4>{text.realname}</h4>
            <h4>{text.nickname}</h4>
         </div>
    )


}


export default InputBox;