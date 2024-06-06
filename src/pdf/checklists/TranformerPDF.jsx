import React from 'react';
import { Page, Text, Document, Image } from '@react-pdf/renderer';
import TrPDF from '../../assets/PDF/TranformerCheckList.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function TranformerPDF({data}) {

  const textEntries = [
    // mru in 1
    { text: data.sw_in1 === true ? '/' : '' , x: 107, y: 195 },
    { text: data.sw_in1 === true ? '' : '/' , x: 131, y: 195 },


    { text: data.sw_ground_in1 === true ? '/' : '' , x: 107, y: 210 },
    { text: data.sw_ground_in1 === true ? '' : '/' , x: 131, y: 210 },

    { text: data.lamp_rmu_in1 === true ? '/' : '', x: 112, y: 243 },
    { text: data.lamp_rmu_in1 === true ? '' : '/', x: 72, y: 243 },


    // { text: 'Comment', x: 45, y: 277 },

    // mru in 2 +128
    { text: data.sw_in2 === true ? '/' : '' , x: 107 + 128, y: 195 }, 
    { text: data.sw_in2 === true ? '' : '/' , x: 131 + 128, y: 195 },


    { text: data.sw_ground_in2 === true ? '/' : '' , x: 107 + 128, y: 210 },
    { text: data.sw_ground_in2 === true ? '' : '/' , x: 131 + 128, y: 210 },

    { text: data.lamp_rmu_in2 === true ? '/' : '', x: 112 + 128, y: 243 },
    { text: data.lamp_rmu_in2 === true ? '' : '/', x: 72 + 128, y: 243 },


    // { text: 'Comment', x: 45 + 128, y: 275 },

    // mru out 1 +128
    { text: data.sw1_out1 === true ? '/' : '' , x: 107 + 256, y: 195 }, 
    { text: data.sw1_out1 === true ? '' : '/' , x: 131 + 256, y: 195 },


    { text: data.sw2_out1 === true ? '/' : '' , x: 107 + 256, y: 210 },
    { text: data.sw2_out1 === true ? '' : '/' , x: 131 + 256, y: 210 },

    { text: data.sw_ground_out1 === true ? '/' : '' , x: 107 + 256, y: 227 },
    { text: data.sw_ground_out1 === true ? '' : '/' , x: 131 + 256, y: 227 },

    { text: data.lamp_rmu_out1 === true ? '/' : '', x: 112 + 254, y: 243 },
    { text: data.lamp_rmu_out1 === true ? '' : '/', x: 72 + 254, y: 243 },


    // { text: 'Comment', x: 45 + 256, y: 274 },


    // mru out 2 +127
    { text: data.sw1_out2 === true ? '/' : '' , x: 107 + 256 + 128, y: 195 }, 
    { text: data.sw1_out2 === true ? '' : '/' , x: 131 + 256 + 128, y: 195 },


    { text: data.sw2_out2 === true ? '/' : '' , x: 107 + 256 + 128, y: 210 },
    { text: data.sw2_out2 === true ? '' : '/' , x: 131 + 256 + 128, y: 210 },

    { text: data.sw_ground_out2 === true ? '/' : '' , x: 107 + 256 + 128, y: 227 },
    { text: data.sw_ground_out2 === true ? '' : '/' , x: 131 + 256 + 128, y: 227 },

    { text: data.lamp_rmu_out2 === true ? '/' : '', x: 112 + 254 + 128, y: 243 },
    { text: data.lamp_rmu_out2 === true ? '' : '/', x: 72 + 254 + 128, y: 243 },


    // { text: 'Comment', x: 45 + 256 + 128, y: 274 },

    // Pressure Gauge
    { text: data.pressure === true ? '/' : '' , x: 51, y: 309 }, 
    { text: data.pressure === true ? '' : '/' , x: 51, y: 320 },

    // tempTR
    { text: data.tr_ch1 , x: 72, y: 403 }, 
    { text: data.tr_ch2 , x: 152, y: 403 },
    { text: data.tr_ch3 , x: 235, y: 403 }, 

    // temp room TR
    { text: data.tr_room_temp , x: 73, y: 435}, 
    { text: data.tr_room_hum , x: 178, y: 435 },
    // { text: 'Comment', x: 83, y: 446 },

    // fan room TR
    { text: data.fan_status ? '/' : '' , x: 318, y: 395 },
    { text: data.fan_status ? '' : '/' , x: 360, y: 395 },
    

    // Alarm temp
    { text: data.tr_temp_alarm ? '/' : '' , x: 367, y: 410 },
    { text: data.tr_temp_alarm ? '' : '/' , x: 412, y: 410 },

    // trip temp
    { text: data.tr_temp_trip ? '/' : '' , x: 367, y: 427 },
    { text: data.tr_temp_trip ? '' : '/' , x: 412, y: 427 },
    // { text: 'Comment', x: 367, y: 444 },

    // mdb volttage
    { text: data.l1 , x: 140, y: 525 },
    { text: data.l2 , x: 220, y: 525 },
    { text: data.l2 , x: 300, y: 525 },

    // mdb ampre
    { text: data.i1 , x: 140, y: 557 },
    { text: data.i2 , x: 220, y: 557 },
    { text: data.i3 , x: 300, y: 557 },

    // mdb pf , meter
    { text: data.pf , x: 360, y: 550 },
    { text: data.meter , x: 450, y: 540 },

    // Braker
    { text: data.main_mcb ? '/' : '' , x: 94, y: 590 },
    { text: data.main_mcb ? '' : '/' , x: 124, y: 590 },


    { text: data.db1 === true ? '/' : '' , x: 94, y: 590 + 16 },
    { text: data.db1 === true ? '' : '/' , x: 124, y: 590 + 16},

    { text: data.db2 === true ? '/' : '', x: 94, y: 590 + 32 },
    { text: data.db2 === true ? '' : '/', x: 125, y: 590 + 32},

    // capbank
    { text: data.capbank === true ? '/' : '' , x: 94 + 142, y: 590 },
    { text: data.capbank === true ? '' : '/' , x: 124 + 142, y: 590 },


    { text: data.mcb1 === true ? '/' : '' , x: 94 + 142, y: 590 + 15 },
    { text: data.mcb1 === true ? '' : '/' , x: 124 + 141, y: 590 + 15},

    { text: data.mcb2 === true ? '/' : '', x: 94 + 142, y: 590 + 30 },
    { text: data.mcb2 === true ? '' : '/', x: 125 + 141, y: 590 + 30},

    // status
    { text: '/' , x: 358, y: 590 },
    // { text: '/' , x: 391, y: 590 },

    { text: 'Auto mode' , x: 460, y: 608 },

    // ventilation fan

    { text: '/' , x: 69, y: 662 },
    // { text: '/' , x: 100, y: 662 },

    { text: data.fan1 === true ? '/' : '', x: 43, y: 662 + 17 },
    { text: data.fan2 === true ? '/' : '' , x: 86, y: 662 + 17},

    { text: data.fan3 === true ? '/' : '' , x: 43, y: 662 + 31 },
    { text: data.fan4 === true ? '/' : '' , x: 86, y: 662 + 31},
    
    // { text: 'note' , x: 86, y: 712},

    // meter 7.00 
    { text: '87562.15' , x: 223, y: 662 },
    { text: '0.895' , x: 233, y: 662 + 16 },
    { text: '0.958' , x: 233, y: 662 + 33 },
    { text: '25864.15' , x: 247, y: 662 + 49},
    { text: '256485.15' , x: 247, y: 662 + 65},
    
    
    // send by
    { text: data.firstname , x: 450, y: 665 },
    { text: data.created_at.split('T', 1)[0] , x: 450, y: 664 + 17 },
    { text: 'Wittawatt' , x: 450, y: 664 + 33 },
  ];

  return (
    <Document title='Roomtemp' >
      <Page size="A4" style={{
        fontSize : 12
      }}>
        <Text style={{
            position : 'absolute',
            top: 100,
            left: 100
        }}>
          <FontAwesomeIcon icon={faCheck} />
        </Text>

        <Image style={{
            position : 'relative',
            top: 0,
            left: 0
        }} src={TrPDF}></Image>

        {textEntries.map((entry, index)=>{
          return (
          <Text
            key={index}
            style={{
              position: 'absolute',
              fontSize: 12,
              fontWeight : 'extralight',
              color : 'blue',
              left: entry.x,
              top: entry.y,
            }}
          >
            {entry.text}
          </Text>
          )
        })}

      </Page>
    </Document>
  );
}
