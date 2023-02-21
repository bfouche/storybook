import React from 'react';
import CTA from '../components/CTA';
import './cta.css';

export default {
    title: 'CTA',
    component: CTA,
}

const Template = ({children, ...args}) => <CTA {...args}>{children}</CTA>;

export const Default = Template.bind({});
Default.args = {
    children: 'En savoir plus >>'
};

export const Before = Template.bind({});
Before.args = {
    children: 'En savoir plus',
    className: 'breadcrumb'
};

export const Button = Template.bind({});
Button.args = {
    children: 'En savoir plus',
    className: 'button'
};
