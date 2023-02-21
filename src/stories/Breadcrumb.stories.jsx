import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
}

const Template = ({children, ...args}) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
    dataBreadcrumb: [
        {text: 'home', utl: '/'},
        {text: 'Categories', utl: '/categories'},
        {text: 'Article 1', url: '/categories/articles1'}
    ]
};
