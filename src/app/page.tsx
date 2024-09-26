'use client';  // This ensures client-side rendering for the component

import React, { useState } from "react";
import Form from "../components/Form";
import Table, { DataPoint } from "../components/Table"; // Import types for data
import styles from './page.module.css';

export default function Home() {
  // Define the structure of your data points array using a DataPoint type
  const [data, setData] = useState<DataPoint[]>([
    { url: "https://", domain: "LinkedIn", scrapability: "Request", risks: "High", hits: 100, captcha: "Yes", responseStatus: "Success" },
    { url: "https://", domain: "Facebook", scrapability: "Request", risks: "High", hits: 500, captcha: "No", responseStatus: "Success" },
    { url: "https://", domain: "Twitter", scrapability: "Request", risks: "Low", hits: 1000, captcha: "No", responseStatus: "Failure" },
    { url: "https://", domain: "Instagram", scrapability: "Request", risks: "Medium", hits: 1000, captcha: "Yes", responseStatus: "Failure" },
    { url: "https://", domain: "LinkedIn", scrapability: "Request", risks: "High", hits: 500, captcha: "Yes", responseStatus: "Success" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button className={styles.tabButton}>Feasibility Check</button>
        <button className={styles.tabButton}>Data Analysis</button>
      </div>

      <Form />
      <Table data={data} />
    </div>
  );
}
