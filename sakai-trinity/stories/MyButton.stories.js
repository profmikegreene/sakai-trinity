export default {
    title: 'Example/Button',
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Button = ({ backgroundColor = 'white', text }) => {
    return `
      <button type="button" style="background-color: ${backgroundColor}">
        ${text}
      </button>
    `;
  };
  
  export const ButtonA = Button.bind({});
  ButtonA.args = {
    text: 'Button A',
  };
  
  export const ButtonB = Button.bind({});
  ButtonB.args = {
    text: 'Button B',
  };