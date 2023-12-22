import {
  Button as Nativebutton,
  ButtonProps,
  ElementProps
} from '@mantine/core';

interface MyButtonProps
  extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {}


function Button({ ...others }: MyButtonProps) {
  return <Nativebutton {...others} />;

}


export default Button;
