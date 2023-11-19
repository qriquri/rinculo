import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./Select.module.css";
import { ReactNode } from "react";

interface IProps {
  label: string;
  value: number;
  children: ReactNode;
  onSelectChange: (e: SelectChangeEvent<number>) => void;
  onSelectOpen?: () => void;
}

const SelectForm: React.FC<IProps> = (props) => {
  const handleOpen = () => {
    if (props.onSelectOpen) {
      props.onSelectOpen();
    }
  };
  return (
    <FormControl className={styles.selectContainer} fullWidth>
      <InputLabel id="search-range-label">{props.label}</InputLabel>
      <Select
        className={styles.select}
        labelId="search-range-label"
        label={props.label}
        value={props.value}
        inputProps={{ MenuProps: { disableScrollLock: true } }} // セレクターを開いたときに勝手にbodyにpaddingが追加されるのを防ぐ
        sx={{ bgcolor: "white" }}
        onChange={props.onSelectChange}
        onOpen={handleOpen}
      >
        {props.children}
      </Select>
    </FormControl>
  );
};

export default SelectForm;
