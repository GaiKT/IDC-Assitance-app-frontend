import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';
import TranformerPDF from './TranformerPDF';

export default function ChecklistPDF() {
  const location = useLocation();
  console.log(location)

  return (
    <div>
        <PDFViewer style={{
            width :'100%',
            height : '80vh'
        }}>
            <TranformerPDF data={location.state} />
        </PDFViewer>
    </div>
  )
}
