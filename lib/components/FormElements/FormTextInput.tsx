import { ReactNode } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type FormTextInputProps = {
  label?: string | ReactNode;
  name?: string;
  type?: 'text' | 'password' | 'number';
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: {
    input: StyleXStyles;
    inputWrapper: StyleXStyles;
    // For <FormInputLabel>
    label: StyleXStyles;
    above: StyleXStyles;
    below: StyleXStyles;
    left: StyleXStyles;
    right: StyleXStyles;
  };
};

export const FormTextInput: React.FC<FormTextInputProps> = ({
  label = '',
  name = '',
  type = 'text',
  labelPos = 'left',
  value = '',
  onChange,
  className
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div
      {...stylex.props(
        baseStyles.inputWrapper,
        className && className.inputWrapper
      )}
    >
      {labelPos === 'left' || labelPos === 'above' ? (
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ''
      )}
      <input
        {...stylex.props(baseStyles.input, className && className.input)}
        value={value || ''}
        type={type}
        name={name}
        id={name}
        onChange={onChangeHandler}
      />
      {labelPos === 'right' || labelPos === 'below' ? (
        <FormInputLabel
          position={labelPos}
          name={name}
          label={label}
          className={className}
        />
      ) : (
        ''
      )}
    </div>
  );
};

const baseStyles = stylex.create({
  inputWrapper: {
    marginBottom: '20px'
  },
  input: {
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    width: '100%'
  }
});
