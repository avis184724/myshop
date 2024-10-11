import styles from "./sign.module.css";
import { TextField , Fade } from "@mui/material";
import { useState } from "react";

export default function Sign() {
  const [ idValue, setIdValue ] = useState("");
  const [ showPwField, setShowPwField] = useState(false);
  const handleIdChange = (event) => {
    const value = event.target.value;
    setIdValue(value);

    if (value.length >= 6) {
      console.log(value)
      setShowPwField(true);
    } else {
      setShowPwField(false);
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.head}>회원가입</h2>
        <div className={styles.form}>
        <TextField 
          id="id-required"
          label="ID"
          placeholder="ID를 입력해주세요"
          helperText="6-12자 이내 영문, 숫자 사용가능"
          value={idValue}
          onChange={handleIdChange}
          fullWidth
        ></TextField>
        {showPwField && (
          <Fade in={showPwField} timeout={500}>
            <TextField
              id="password-required"
              label="Password"
              type="password"
              placeholder="Password"
              helperText="8-16자 이내, 영문, 숫자, 특수문자 사용가능"
              fullWidth
            ></TextField>
          </Fade>
        )}
        </div>
      </div>
    </>
  )
}