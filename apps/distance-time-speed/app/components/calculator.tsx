import styles from './calculator.module.css';
import { useState } from 'react';

const Calculator = () => {
  const [inputs, setInputs] = useState({
    first: '',
    second: '',
    third: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <span>Distance</span>
      <input
        type="text"
        name="first"
        value={inputs.first}
        onChange={handleChange}
        placeholder="First Text Box"
        className={styles.margin}
      />
      <br />
      <span>Time</span>
      <input
        type="text"
        name="second"
        value={inputs.second}
        onChange={handleChange}
        placeholder="Second Text Box"
        className={styles.margin}
      />
      <br />
      <span>Speed</span>
      <input
        type="text"
        name="third"
        value={inputs.third}
        onChange={handleChange}
        placeholder="Third Text Box"
        className={styles.margin}
      />
    </div>
  );
}

export default Calculator;
