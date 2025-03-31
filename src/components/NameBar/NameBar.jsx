import { useContext, useState } from "react";
import { HomeContext } from "../../pages/Home";
import {
  ClickAwayListener,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { IconButton } from "@mui/joy";
import { Check, Edit } from "@mui/icons-material";
import "./namebar.sass";

const NameBar = () => {
  const CustomTextField = styled(TextField)`
    & .MuiInputBase-input {
      padding-left: 0;
      color: gray;
      font-family: "Russo One", sans-serif;
      font-weight: 300;
      text-indent: 14px;
    }
    & .MuiInputLabel-root {
      color: gray;
      font-family: "Russo One", sans-serif;
      text-transform: uppercase;
    }
    & label.Mui-focused {
      color: gray;
      font-family: "Russo One", sans-serif;
      font-weight: bold;
    }
    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: gray;
      }
      &:hover fieldset {
        border-color: gray;
        border-width: 2px;
      }
      &.Mui-focused fieldset {
        border-color: gray;
      }
    }
  `;

  const { userName, handlerUserLogin } = useContext(HomeContext);

  const [userNameInput, setUserNameInput] = useState("");
  const [editUserName, setEditUserName] = useState(true);

  const handlerSaveName = () => {
    if (userNameInput.length >= 3) {
      handlerUserLogin(userNameInput);
      setUserNameInput("");
      setEditUserName(false);
    } else return;
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (userName !== "") {
          setEditUserName(false);
        } else return;
      }}
      mouseEvent={"onMouseDown"}
    >
      <div className="name_bar">
        {editUserName ? (
          <CustomTextField
            autoFocus
            label="NAME"
            value={userNameInput}
            onChange={(event) => {
              event.preventDefault();
              setUserNameInput(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handlerSaveName();
              }
            }}
            InputProps={{ sx: { height: 35 } }}
            InputLabelProps={{ shrink: true }}
          />
        ) : (
          <Typography
            className="name_bar-typography"
            sx={{ color: "grey", textOverflow: "ellipsis" }}
          >
            {userName}
          </Typography>
        )}
        <IconButton
          sx={{
            ml: 1,
            color: "gray",
            borderColor: "gray",
            "&:hover": {
              backgroundColor: "silver",
              borderWidth: "2px",
              borderRadius: "4px",
            },
          }}
          variant="outlined"
          onClick={() =>
            editUserName ? handlerSaveName() : setEditUserName(true)
          }
        >
          {editUserName ? <Check /> : <Edit />}
        </IconButton>
      </div>
    </ClickAwayListener>
  );
};

export default NameBar;
