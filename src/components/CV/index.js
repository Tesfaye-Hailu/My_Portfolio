
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Resume from '../../Assets/Resume.pdf';
import styles from './index.css';

// Set worker path for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.pdfContainer}>
      <h1>My CV</h1>
      <div className={styles.pdfWrapper}>
        <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
          {numPages && (
            <Page
              pageNumber={1}
              className={styles.pdfPage}
              width={595}
              renderAnnotationLayer={false}
              renderInteractiveForms={false}
              renderTextLayer={false}
            />
          )}
        </Document>
      </div>
    </div>
  );
};

export default CV;



