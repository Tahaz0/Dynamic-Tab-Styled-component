// import React from 'react';
import { CardBox, FeatureCard } from './FeatureStyle';
import { H1, H2, P } from '../Banner/BannerStyle';
import { SectionTop } from '../Tampletes/TampletesStyle';
import { Container } from '../Container';
import { FeatureData } from './FeatureData';


export const Feature = () => {
    return (
        <section id='features'>

            <SectionTop>
                <H1>Template Features</H1>
                <H2>Every template is built with such efforts that they are ready to meet all clients’ expectations.</H2>
            </SectionTop>

            <Container>
                <FeatureCard>
                    {
                        FeatureData.map(({ Image, heading, detail }, index) => {

                            return (
                                <CardBox key={index}>
                                    <header>
                                        <img src={Image} alt="" />
                                    </header>
                                    <div>
                                        <h3> {heading} </h3>
                                        <P> {detail} </P>
                                    </div>
                                </CardBox>

                            );
                        })
                    }
                </FeatureCard>
            </Container>

        </section>
    );
};
