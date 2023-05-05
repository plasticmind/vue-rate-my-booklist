import Book from './Book.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
    title: 'Example/Book',
    component: Book,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Book },
    template: '<book @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Book',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Book',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Book',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Book',
};