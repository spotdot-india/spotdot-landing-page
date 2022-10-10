import { useState } from 'react';

import { TypeAnimation } from 'react-type-animation';

import ConsolePortrait from '../../assets/console_portrait.png';
import ConsoleModel from '../../assets/spotone_model.png';

import Styled from './Banner.styled';

// import ConsoleScreen from '../../assets/sd_console_scr.svg';
// import SpotLedMatrix from '../SpotLedMatrix/SpotLedMatrix';

const Banner = () => {
    // LABEL DURATION
    const LABEL_DURATION = 2;

    const [labelName, setLabelName] = useState<string>('one');

    return (
        <Styled.BannerWpr>
            <Styled.BoxHeading>
                <Styled.Heading>
                    <b>secure</b> contactless experiences for your{' '}
                    <span className={`typeLabel ${labelName}`}>
                        <TypeAnimation
                            sequence={[
                                () => setLabelName('one'),
                                'company',
                                LABEL_DURATION * 1000,
                                () => setLabelName('two'),
                                'studio',
                                LABEL_DURATION * 1000,
                                () => setLabelName('three'),
                                'store',
                                LABEL_DURATION * 1000,
                                () => setLabelName('four'),
                                'people',
                                LABEL_DURATION * 1000,
                            ]}
                            speed={20}
                            wrapper='b'
                            cursor={false}
                            repeat={Infinity}
                        />
                    </span>
                </Styled.Heading>
                <Styled.DescHeadingOne>
                    Let your people move in and out of places without storing their biometric data. <br />
                    Integrate powerful contactless experiences into your business with our products.
                </Styled.DescHeadingOne>
                <Styled.SubHeading>Coming Soon...</Styled.SubHeading>
            </Styled.BoxHeading>
            {/* <Styled.DescHeadingTwo>What do we do? We build experiences.</Styled.DescHeadingTwo>
            <Styled.ConsolePortrait src={ConsolePortrait} /> */}
            {/* <SpotLedMatrix /> */}
            {/* <Styled.HeroImage src={ConsoleModel} alt='hero-console' /> */}

        </Styled.BannerWpr>
    );
};

export default Banner;
