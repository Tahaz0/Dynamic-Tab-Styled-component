import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

import { I } from '../../Button';
import { Head, Link, List } from './NavStyle';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Menu = styled.menu`
 background-color: white;
 margin-top: 0;
 box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.33);
`;




export const Nav = () => {
    return (

        <Menu>
            <Container>
                <Head>
                    <div>
                        <img src="https://new.axilthemes.com/demo/template/splash/cynic/images/brand-logo.png" alt="" />
                    </div>

                    <div>
                        <List>
                            <li><Link href="#templates">
                                TEMPLATES
                            </Link></li>
                            <li><Link href="#features">
                                FEATURES
                            </Link></li>
                            <li><Link href="#us">
                                WHY US
                            </Link></li>
                            <li><Link href="#buy" bg='#008CCB' c='white'>
                                <I> <AiOutlineShoppingCart /></I> BUY NOW
                            </Link></li>
                        </List>
                    </div>
                </Head>
            </Container>
        </Menu>


    );
};
