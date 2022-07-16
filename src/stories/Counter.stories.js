import React from 'react';
import Counter from '../components/Counter';
import CounterDocs from './Counter.mdx';

// This exported obeject determines what is show on the dashboard
export default {
  title: 'Counter',
  component: Counter,
  // Here is where we set the docs which we imported above
  parameters: {
    docs: {
      page: CounterDocs
    }
  }
};

// create a template that maps arguments to the component
const Template = (args) => <Counter {...args}/>;

// Define a story that uses the template
export const Basic = Template.bind({});

// Define the starting Arguments for that story
Basic.args = {
    start: 0
}

export const Five = () => <Counter start={5}/>;

export const Ten = () => <Counter start={10}/>;