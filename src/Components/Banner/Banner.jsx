import React from 'react';
import { Bottom, Contentdiv, H1, H2, Imgdiv, Maindiv, P, Span } from './BannerStyle';
import ReactTypingEffect from 'react-typing-effect';
import { Button } from '../../Button';
import { Container } from '../Container';
import { HiOutlineSpeakerphone } from 'react-icons/hi';




<ReactTypingEffect
    text={["Hello.", "World!"]}
/>;
export const Banner = () => {
    return (
        <section id='banner'>

            <Container>
                <Maindiv>
                    <Contentdiv>

                        <H1>Template for <ReactTypingEffect
                            text={["digital agency", "SEO agency", "PPC agency", "IT Farm"]}
                        />
                        </H1>

                        <H2>Purchase, setup and start your business today!</H2>

                        <P>
                            Marketo is built for all kind of digital agencies. You can find everything you need in one template to kickstart your digital agency.
                        </P>

                        <Button>
                            EXPLORE TEMPLATES
                        </Button>
                    </Contentdiv>

                    <Imgdiv className=''>
                        <img src="https://new.axilthemes.com/demo/template/splash/cynic/images/banner-img.png" alt="" />
                    </Imgdiv>
                </Maindiv>

            </Container>

            <Bottom>
                <Container>
                    <HiOutlineSpeakerphone fontSize={'25px'} />  <Span>HTML version 2.2 has been released!</Span>
                </Container>
            </Bottom>
        </section>
    );
};
