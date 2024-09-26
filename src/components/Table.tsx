import React from 'react';
import styles from './Table.module.css';

const Table: React.FC = () => {
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>URL</th>
          <th className={styles.tableHeader}>Domain</th>
          <th className={styles.tableHeader}>Scrapability</th>
          <th className={styles.tableHeader}>Risks</th>
          <th className={styles.tableHeader}>Hits</th>
          <th className={styles.tableHeader}>Captcha Detected</th>
          <th className={styles.tableHeader}>Response Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.tableData}>https://linkedin.com</td>
          <td className={styles.tableData}>LinkedIn</td>
          <td className={styles.tableData}>High</td>
          <td className={styles.tableData}>100</td>
          <td className={styles.tableData}>Yes</td>
          <td className={styles.tableData}>Success</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default Table;
