import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState('BubbleSort');
  props.algorithmchoice(value)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="Algorithm" name="Algorithm1" value={value} onChange={handleChange}>
        <FormControlLabel color="secondary" value="BubbleSort" control={<Radio />} label="Bubble Sort" />
        <FormControlLabel value="InsertionSort" control={<Radio />} label="Insertion Sort" />
        <FormControlLabel value="SelectionSort" control={<Radio />} label="Selection Sort" />
        <FormControlLabel value="QuickSort"  control={<Radio />} label="Quick Sort" />
        <FormControlLabel value="ShellSort" control={<Radio />} label="Shell Sort" />
        <FormControlLabel value="MergeSort" control={<Radio />} label="Merge Sort" />
        <FormControlLabel value="HeapSort" control={<Radio />} label="Heap Sort" />
      </RadioGroup>
    </FormControl>
  );
}