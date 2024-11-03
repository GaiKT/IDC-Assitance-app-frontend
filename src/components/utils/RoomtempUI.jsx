import React from 'react'

const rackLists = {
    phase1 : {
        private : [
            {
                name: 'A' , count: 10
            },
            {
                name:'B' , count: 9
            },
            {
                name:'C' , count: 7
            },
            {
                name: 'D' , count: 4
            }],
        coLo: [
            {
                name: 'E' , count: 15
            },
            {
                name:'F' , count: 13
            },
            {
                name:'G' , count: 13
            },
            {
                name: 'H' , count: 15
            },
            {
                name:'I' , count: 15
            },
            {
                name: 'J' , count: 13
            }],
    },
    phase2 : {
        private : [
            {
                name: 'O' , count: 10
            },
            {
                name:'N' , count: 10
            },
            {
                name:'M' , count: 8
            }],
        coLo: [
            {
                name: 'L' , count: 8
            },
            {
                name:'K' , count: 8
            }],
    }
}

const tempDetectorList = [
    {
        name : 'A4' , 
    },    {
        name : 'C4' , 
    },    {
        name : 'E2' , 
    },    {
        name : 'E13' , 
    },    {
        name : 'F1' , 
    },    {
        name : 'F9' , 
    },    {
        name : 'G4' , 
    },    {
        name : 'G13' , 
    },    {
        name : 'H2' , 
    },    {
        name : 'H10' , 
    },    {
        name : 'I2' , 
    },    {
        name : 'I10' , 
    },    {
        name : 'J1' , 
    },    {
        name : 'J12' , 
    },    {
        name : 'K2' , 
    },    {
        name : 'K7' , 
    },    {
        name : 'L3' , 
    },    {
        name : 'L7' , 
    },    {
        name : 'M1' , 
    },    {
        name : 'M6' , 
    },    {
        name : 'N1' , 
    },    {
        name : 'N8' , 
    },    {
        name : 'O3' , 
    },    {
        name : 'O9' , 
    }
]

export default function RoomTempUI({data}) {
  
  const tempMapData = tempDetectorList.map((temp , index)=>{
    return {
        ...temp,
        temp: data ? data[`TempDetector_${index + 1}_temp`] || 'N/A' : 'N/A',
        hum: data ? data[`TempDetector_${index + 1}_hum`] || 'N/A' : 'N/A',
      };
  }) 

  return (
    <div className='relative'> 
    {/* Phase1 */}
    <div>
        <h1>Colocation Phase1</h1>
        <div className='min-h-80 border my-2 flex max-lg:flex-col gap-2 text-center rounded-md'>
                <div className='w-2/5 max-lg:w-full p-5 relative'>
                <p className='absolute top-2 left-40 bg-white px-2'>Private Room</p>
                <div className='flex justify-between gap-2 p-5 border-2 border-dashed rounded-sm text-sm'>
                        {
                            rackLists.phase1.private.map((rack , index)=>{
                                return (
                                    <div className='w-20 h-full border-4 rounded text-white flex flex-col gap-1'>
                                    {
                                        Array.from({ length: rack.count }, (_, i) => rack.count - i).map((num)=>{

                                            const tempDetectorRack =  tempMapData?.filter((temp) => temp.name === rack.name + num)
                                            let toolTip = ''

                                            if( tempDetectorRack[0] ){
                                                toolTip = 'tooltip tooltip-open tooltip-info tooltip-left'
                                            }

                                            return (
                                                <div key={rack.name + num} className={`${toolTip} cursor-pointer bg-slate-400 hover:border-blue-800 hover:bg-blue-600`} data-tip={tempDetectorRack[0] ? `${tempDetectorRack[0].temp} ํC` : ''}>
                                                    {rack.name}{num}
                                                </div>
                                            );
                                        }) 
                                    }
                                </div>  
                                );
                            })
                        }
                </div>
            </div>
            <div className='w-3/5 max-lg:w-full p-5 text-sm'>
                <div className='flex justify-between gap-2'>
                    {
                        rackLists.phase1.coLo.map((rack , index)=>{
                            return (
                                <div className='w-20 h-full border-4 rounded text-white flex flex-col gap-1'>
                                    {
                                        Array.from({ length: rack.count }, (_, i) => rack.count - i).map((num)=>{

                                            const tempDetectorRack =  tempMapData?.filter((temp) => temp.name === rack.name + num)
                                            let toolTip = ''

                                            if( tempDetectorRack[0] ){
                                                toolTip = 'tooltip tooltip-open tooltip-info tooltip-left'
                                            }

                                            return (
                                                <div className={`${toolTip} cursor-pointer bg-slate-400 hover:border-blue-800 hover:bg-blue-600`} data-tip={tempDetectorRack[0] ? `${tempDetectorRack[0].temp} ํC` : ''}>
                                                    {rack.name}{num}
                                                </div>
                                            );
                                        }) 
                                    }
                            </div>  
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    {/* Phase2 */}
    <div>
        <h1>Colocation Phase2</h1>
        <div className='lg:w-1/2 w-full border my-2 flex flex-col text-center rounded-md text-sm'>
            <div className='p-5 relative flex justify-center'>
                <p className='absolute top-2 left-40 bg-white px-2'>Private Room</p>
                <div className='h-full justify-between items-end p-5 border-2 border-dashed rounded-sm flex flex-col gap-2'>
                    {
                        rackLists.phase2.private.map((rack , index)=>{
                            return (
                                <div className='h-16 border-4 w-fit flex gap-1 items-center justify-end'>
                                    {
                                        Array.from({ length: rack.count }, (_, i) => rack.count - i).map((num)=>{

                                            const tempDetectorRack =  tempMapData?.filter((temp) => temp.name === rack.name + num)
                                            let toolTip = ''

                                            if( tempDetectorRack[0] ){
                                                toolTip = 'tooltip tooltip-open tooltip-info tooltip-bottom'
                                            }

                                            return (
                                                <div className={`${toolTip} h-full w-8 border cursor-pointer bg-slate-400 hover:border-blue-800 hover:bg-blue-600 px-1 flex justify-center items-center text-white`} data-tip={tempDetectorRack[0] ? `${tempDetectorRack[0].temp} ํC` : ''}>
                                                    {rack.name}{num}
                                                </div>
                                            );
                                        }) 
                                    }                                    
                            </div>  
                            );
                        })
                    }
                </div>
            </div>
            <div className='relative flex justify-end px-10'>
                <div className='h-full w-full justify-between items-end p-5 pt-0 rounded-sm flex flex-col gap-2 mx-10'>
                    {
                        rackLists.phase2.coLo.map((rack , index)=>{
                            return (
                                <div className='h-16 border-4 w-fit flex gap-1 items-center justify-end'>
                                    {
                                        Array.from({ length: rack.count }, (_, i) => rack.count - i).map((num)=>{

                                            const tempDetectorRack =  tempMapData?.filter((temp) => temp.name === rack.name + num)
                                            let toolTip = ''

                                            if( tempDetectorRack[0] ){
                                                toolTip = 'tooltip tooltip-open tooltip-info tooltip-bottom'
                                            }

                                            return (
                                                <div className={`${toolTip} h-full w-8 border cursor-pointer bg-slate-400 hover:border-blue-800 hover:bg-blue-600 px-1 flex justify-center items-center text-white`} data-tip={tempDetectorRack[0] ? `${tempDetectorRack[0].temp} ํC` : ''}>
                                                    {rack.name}{num}
                                                </div>
                                            );
                                        }) 
                                    }  
                            </div>  
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
