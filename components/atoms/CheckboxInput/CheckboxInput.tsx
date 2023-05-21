import classNames from 'classnames';
import { ICustomInputProps } from '../TextInput/TextInput';

export const CheckboxInput = ({
  size = 'medium',
  backgroundColor = 'none',
  field = { name: '', value: '' },
  id,
  label,
  ...props
}: ICustomInputProps) => {
  return (
    <div className='flex items-center'>
      {label && (
        <label
          className={classNames(
            {
              'text-sm': size === 'small',
              'text-lg': size === 'medium',
              'text-xl': size === 'large',
            },
            'mr-2'
          )}
          htmlFor={field.name}
        >
          {label}
        </label>
      )}
      <input
        name={field.name}
        value={field.value}
        id={id}
        onChange={field.onChange}
        type='checkbox'
        className={classNames(
          {
            'h-4 w-2': size === 'small',
            'h-5 w-5': size === 'medium',
            'h-7 w-7': size === 'large',
            'bg-blue-400': backgroundColor === 'primary',
            'bg-lime-300': backgroundColor === 'secondary',
            'bg-red-300': backgroundColor === 'danger',
            'bg-transparent': backgroundColor === 'none',
          },
          'text-black w-max rounded-sm px-2 py-1 placeholder:text-gray-200'
        )}
        {...props}
      ></input>
    </div>
  );
};
