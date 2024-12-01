import React from "react";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import carouselData from "../data/carouselData";

const About = () => {
    const accordionData = [
        {
            title: 'What is the universe?',
            content: 'The universe is vast and contains everything that exists.',
        },
        {
            title: 'What is a galaxy?',
            content: 'A galaxy is a large collection of stars, gas, and dust bound together by gravity.',
        },
        {
            title: 'What is a star?',
            content: 'A star is a massive, luminous sphere of plasma held together by gravity.',
        },
        {
            title: 'What is a planet?',
            content: 'A planet is a large object that orbits a star and does not produce its own light.',
        },
        {
            title: 'What is a moon?',
            content: 'A moon is a natural satellite that orbits a planet.',
        },
    ];
    return (
        <>
        <section>
            <Carousel items={carouselData}/>
        </section>
        <section className='md:w-1/3'>
        <h2 className='text-2xl font-semibold mb-4'>FAQ</h2>
        {accordionData.map((item, index) =>(
        <Accordion key={index} title={item.title} content={item.content} />
        ))}
        </section>
        </>
    );
};

export default About;