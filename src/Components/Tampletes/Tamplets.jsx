import React, { useState } from 'react';
import { Container } from '../Container';
import { H1, H2 } from '../Banner/BannerStyle';
import Data from './Data';
import '../../index.css';
import { DataButton } from './DataButton';
import { DataItems } from './DataItems';
import { SectionTop } from './TampletesStyle';



const allDataValues = [...new Set(Data.map((currentElement) => currentElement.category)), 'ALL'];

console.log(allDataValues);


export const Tamplets = () => {

    const [currentData, changeCurrentData] = useState(Data);

    const [buttonData] = useState(allDataValues);


    const filterItem = (categoryItems) => {

        if (categoryItems === 'ALL') {
            changeCurrentData(Data);
            return;
        }

        const updateData = Data.filter((curElm) => {
            return curElm.category === categoryItems;
        });
        changeCurrentData(updateData);
    };

    return (
        <section id='templates'>
            <Container>
                <SectionTop>
                    <H1>
                        Our templates are just ready to use
                    </H1>

                    <H2>Offer full service digital media solution to your clients.
                    </H2>
                </SectionTop>

                {/* ***************** Button component **************** */}
                <DataButton filterItem={filterItem} buttonData={buttonData} />


                {/* ***************** DataItems component **************** */}

                <DataItems DataItems={currentData} />

            </Container>
        </section>



    );
};
