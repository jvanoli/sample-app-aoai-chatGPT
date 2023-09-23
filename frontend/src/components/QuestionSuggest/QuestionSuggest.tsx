import { useState } from "react";
import { Stack, Label } from "@fluentui/react";
import { SendRegular } from "@fluentui/react-icons";
import Send from "../../assets/Send.svg";
import styles from "./QuestionSuggest.module.css";

interface Props {
    onSend: (question: string, id?: string) => void;
    disabled: boolean;
    placeholder: string;
    clearOnSend?: boolean;
    conversationId?: string;
}

export const QuestionSuggest = ({ onSend, disabled, placeholder, conversationId }: Props) => {
    const [question, setQuestion] = useState<string>("");

    const sendQuestion = () => {
        if (disabled ) {
            return;
        }
        onSend(placeholder);
    };

    return (
        <Stack horizontal className={styles.questionSuggestBox} onClick={sendQuestion} >
            <Label className={styles.questionSuggestTextArea}> 
                {placeholder} 
            </Label>
        </Stack>
    );
};
