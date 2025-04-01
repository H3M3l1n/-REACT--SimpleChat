import { styled } from '@mui/material';
import './chatinput.sass';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/joy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../pages/Home';

const ChatInput = () => {
    const CustomTextField = styled(TextField)`
        & .MuiInputBase-input {
            padding-left: 0;
            color: green;
            font-family: 'PT Mono', monospace;
            text-shadow: 0 0 7px #044200, 0 0 10px #075800, 0 0 21px #096e00;
            text-indent: 14px;
        }
        & .MuiInputLabel-root {
            color: green;
            font-family: 'PT Mono', monospace;
            text-transform: uppercase;
        }
        & label.Mui-focused {
            color: green;
            font-family: 'PT Mono', monospace;
            font-weight: bold;
        }
        & .MuiOutlinedInput-root {
            & fieldset {
                border-color: green;
            }
            &:hover fieldset {
                border-color: green;
                border-width: 2px;
            }
            &.Mui-focused fieldset {
                border-color: green;
            }
        }
    `;

    const { userName, userId, handlerMessageSend } = useContext(HomeContext);

    const [chatInput, setChatInput] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (userName && userId) {
            setDisabled(false);
        } else setDisabled(true);
    }, [userName, userId]);

    const validate = (value) => {
        if (!value.trim()) return 'Cannot be blank!';
        if (value.trim().length > 230) return '230 symbols max!';
        return '';
    };

    const handlerClick = () => {
        const validationError = validate(chatInput);
        if (validationError) {
            setError(validationError);
            console.log(validationError);
        } else {
            handlerMessageSend(chatInput);
            setChatInput('');
            setError('');
        }
    };

    return (
        <div className="chat_input">
            <CustomTextField
                disabled={disabled}
                autoFocus
                id=""
                label="Message"
                fullWidth
                error={Boolean(error)}
                InputProps={{
                    sx: {
                        height: 35,
                        pointerEvents: disabled ? 'none' : 'auto',
                    },
                }}
                InputLabelProps={{ shrink: true }}
                value={chatInput}
                onChange={(event) => {
                    event.preventDefault();
                    setChatInput(event.target.value);
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        handlerClick();
                    }
                }}
            />
            <IconButton
                disabled={disabled}
                sx={{
                    ml: 1,
                    color: 'green',
                    borderColor: 'green',
                    borderWidth: '1px',
                    borderRadius: '4px',
                    '&:hover': {
                        color: 'black',
                        backgroundColor: 'green',
                    },
                }}
                variant="outlined"
                onClick={() => handlerClick()}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
    );
};

export default ChatInput;
