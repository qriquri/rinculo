import { Toolbar, Box, Typography, Button } from "@mui/material";
import styles from './ToolBar.module.css'
interface IProps{
    totalNum: number;
    start: number;
    end: number;
}

const CustomToolBar: React.FC<IProps> = (props) => {
  return (
    <Toolbar sx={{ justifyContent: "space-between", padding: '0 0.4rem'}}>
      <Box className={styles.leftContainer}>
        <Box className={styles.totalNum}>
          <Typography fontWeight="bold" variant="h6" sx={{ color: "primary.main" }}>
            {props.totalNum}
          </Typography>
          <Typography>件</Typography>
        </Box>
        <Box className={styles.pager}>
          <Typography fontWeight="bold">{props.start}~{props.end}</Typography>
          <Typography variant="caption">件を表示</Typography>
        </Box>
      </Box>
      <Box className={styles.rightContainer}>
        <Button className={styles.button} variant="contained" color="inherit">前へ</Button>
        <Button className={styles.button} variant="contained" color="inherit">次へ</Button>
      </Box>
    </Toolbar>
  );
};

export default CustomToolBar;

