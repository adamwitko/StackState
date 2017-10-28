import * as React from 'react';
import * as classNames from 'classnames';

interface IButtonProps {
  black?: boolean;
  danger?: boolean;
  dark?: boolean;
  info?: boolean;
  fullwidth?: boolean;
  large?: boolean;
  light?: boolean;
  link?: boolean;
  medium?: boolean;
  outlined?: boolean;
  primary?: boolean;
  small?: boolean;
  success?: boolean;
  text?: boolean;
  warning?: boolean;
  white?: boolean;
  inverted?: boolean;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  loading?: boolean;
}

const Button: React.StatelessComponent<IButtonProps> = (props: IButtonProps) => {
  const classes = classNames('button', {
    'is-black': props.black,
    'is-danger': props.danger,
    'is-dark': props.dark,
    'is-info': props.info,
    'is-large': props.large,
    'is-light': props.light,
    'is-link': props.link,
    'is-medium': props.medium,
    'is-outlined': props.outlined,
    'is-primary': props.primary,
    'is-small': props.small,
    'is-success': props.success,
    'is-text': props.text,
    'is-warning': props.warning,
    'is-white': props.white,
    'is-inverted': props.inverted,
    'is-hovered': props.hovered,
    'is-focused': props.focused,
    'is-active': props.active,
    'is-loading': props.loading,
    'is-fullwidth': props.fullwidth,
  });

  return <a className={classes} {...props} />;
};

export { Button };
