import styles from "./sign.module.css";
import { TextField , Fade } from "@mui/material";
import { use, useState } from "react";

export default function Sign() {
  const [ idValue, setIdValue ] = useState("");
  const [ pwValue, setPwValue ] = useState("");
  const [ pwCheckValue, setPwCheckValue ] = useState("");
  const [ showPwField, setShowPwField ] = useState(false);
  const [ showPwCheckField, setShowPwCheckField] = useState(false);

  const [ helpText, setHelpText ] = useState("6-12자 이내 영문, 숫자 사용가능");
  const [ pwHelpText, setPwHelpText ] = useState("");
  const [ pwCheckHelpText, setPwCheckHelpText] = useState("");

  const [ idError, setIdError ] = useState(false);
  const [ pwError, setPwError ] = useState(false);
  const [ pwCheckError, setPwCheckError ] = useState(false);
  

  const handleIdChange = (event) => {
    const value = event.target.value;
    setIdValue(value);

    const regexId = /^[a-zA-Z0-9]{6,12}$/;
    if (regexId.test(value)) {
      setHelpText('사용 가능한 ID입니다.');
      setShowPwField(true);
      setIdError(false);
    } else {
      setHelpText("유효하지 않는 ID입니다. 6-12자 이내 영문, 숫자 사용가능");
      setIdError(true);
      setShowPwField(false);
    }
  }

  const handlePwChange = (event) => {
    const value = event.target.value;
    setPwValue(value);
    const regexPw = /^[a-zA-Z ](?=.*[0-9])(?=.*[$`~!@#$%^&*\\(\\)\-_=+]).{8,16}$/;

    if (regexPw.test(value)) {
      setShowPwCheckField(true);
      setPwError(false);
      setPwHelpText("사용 가능한 비밀번호입니다.");
    }
    else {
      setShowPwCheckField(false);
      setPwError(true);
      setPwHelpText("비밀번호는 8-16자 이내 영문, 숫자, 특수문자를 모두 포함해야 합니다.");
    }
  }

  const handlePwCheckChange = (event) => {
    const value = event.target.value;
    setPwCheckValue(value);

    if (pwValue == value) {
      setPwCheckError(false);
      setPwCheckHelpText("");
    }
    else {
      setPwCheckError(true);
      setPwCheckHelpText("비밀번호가 일치하지 않습니다");
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.head}>회원가입</h2>
        <div className={styles.form}>
        <TextField 
          error={idError}
          id="id-required"
          label="ID"
          placeholder="ID를 입력해주세요"
          helperText={helpText}
          value={idValue}
          onChange={handleIdChange}
          fullWidth
        ></TextField>
        {showPwField && (
          <Fade in={showPwField} timeout={500}>
            <TextField
              error={pwError}
              id="password-required"
              label="Password"
              type="password"
              placeholder="Password"
              helperText="8-16자 이내, 영문, 숫자, 특수문자 사용가능"
              value={pwValue}
              onChange={handlePwChange}
              fullWidth
            ></TextField>
          </Fade>
        )}
        {showPwCheckField && (
          <Fade in={showPwCheckField} timeout={500}>
            <TextField
              error={pwCheckError}
              id="password-required"
              label="Password 재확인"
              type="password"
              placeholder="Password 다시 입력"
              helperText={pwCheckHelpText}
              value={pwCheckValue}
              onChange={handlePwCheckChange}
              fullWidth
            ></TextField>
          </Fade>
        )}
        </div>
      </div>
    </>
  )
}