import { Button2, TabButtons } from './TampletesStyle';

export const DataButton = ({ filterItem, buttonData }) => {
    return (
        <>

            <TabButtons>

                {
                    buttonData.map((curElm, index) => {
                        return (
                            <Button2 key={index} onClick={() => filterItem(curElm)}> {curElm} </Button2>
                        );
                    })
                }

            </TabButtons>
            {/* <Button2 onClick={() => changeCurrentData(Data)} >ALL COLLECTION</Button2> */}
            {/* 
                
                <Button2 onClick={() => filterItem('openpage')}>OPENPAGE AGENCY</Button2>
                <Button2 onClick={() => filterItem('test')}>test</Button2> */}
        </>
    );
};
