import React, { useState, useRef } from "react";

const ListContainer = ({ element, active, onRemove, onEdited }) => {
  const { id, nickname, realname, isActive } = element;
  const initialState = {
    id: id,
    nickname: nickname,
    realname: realname,
    isActive: isActive,
  };
  const [status, setStatus] = useState(initialState);

  const onChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setStatus({
      ...status,
      [name]: value,
    });
  };

  const [isEditing, setIsEditing] = useState(false);

  const onClickEdit = () => {
    onEdited(status);
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <span>
          <input
            onChange={onChange}
            name="realname"
            placeholder="realname"
          ></input>
          <input
            onChange={onChange}
            name="nickname"
            placeholder="nickname"
          ></input>
        </span>
      ) : (
        <span
          style={{ fontSize: 18, color: isActive ? "Red" : "White" }}
          key={id}
          onClick={() => active(id)}
        >
          {id} {nickname} : {realname}
        </span>
      )}
      <button onClick={onClickEdit}>수정</button>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

function InputBox() {
  const nicknameInput = useRef();
  const [userList, setResult] = useState([]);
  const nextId = useRef(1);

  const [user, setText] = useState({
    id: nextId.current,
    nickname: "",
    realname: "",
    isActive: false,
  });

  const { nickname, realname } = user;

  const inputBoxStyle = {
    color: "red",
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setText({ ...user, [name]: value });
  };

  const submit = () => {
    setResult([...userList, user]);
    //혹은
    //setResult(result.concat(text))
    nextId.current += 1;
    const newUser = {
      id: nextId.current,
      nickname: "",
      realname: "",
      isActive: false,
    };

    setText(newUser);
  };

  const onRemove = (id) => {
    setResult(userList.filter((e) => e.id !== id));
  };

  const active = (id) => {
    setResult(
      userList.map((e) => (e.id === id ? { ...e, isActive: !e.isActive } : e))
    );
  };
  const onEdited = (editedElement) => {
    setResult(
      userList.map((e) => (e.id === editedElement.id ? editedElement : e))
    );
  };

  const onKeyPressed = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <div>
      <h3 style={inputBoxStyle}>Below is a input box!</h3>
      {/* placeholder는 hint임 */}
      <input
        ref={nicknameInput}
        value={realname}
        onChange={onChange}
        name="realname"
        placeholder="realname"
      ></input>
      <input
        value={nickname}
        onChange={onChange}
        name="nickname"
        placeholder="nickname"
        onKeyDown={onKeyPressed}
      ></input>
      <button
        onClick={() => {
          nicknameInput.current.focus();
        }}
      >
        Get Focus
      </button>
      <button onClick={submit}>Submit</button>
      {userList.map((e, index) => (
        <ListContainer
          element={e}
          active={active}
          onRemove={onRemove}
          onEdited={onEdited}
          key={e.id}
        ></ListContainer>
      ))}
    </div>
  );
}

export default InputBox;
