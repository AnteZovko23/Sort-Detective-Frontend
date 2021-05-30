import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
// import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 280,
  },
  input: {
    width: 80,
  },
});

export default function InputSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1000);
  props.sliderdata(value)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value <= 0) {
      setValue(10);
    }
    else if (value > 1000000) {
      setValue(1000000);
    }
    else if(typeof value !== 'number'){
      setValue(10)
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        List Size
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            min={0}
            max={5000}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            marks
            step={200}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10000,
              min: 0,
              max:1000000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
 
  );




}