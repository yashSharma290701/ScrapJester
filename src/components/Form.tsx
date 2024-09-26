import React, { useState } from 'react';
import styles from './Form.module.css';

const Form: React.FC = () => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted URL:", url);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
    <p className="text-lg font-semibold text-gray-700 mb-4" >Check's List</p>
      <div className={styles.checkList}>
        <label>
          <input type="checkbox" /> Captcha's
        </label>
        <label>
          <input type="checkbox" /> Rate Limit
        </label>
        <label>
          <input type="checkbox" /> Hits
        </label>
        <label>
          <input type="checkbox" /> Risks
        </label>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Paste URL's"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
