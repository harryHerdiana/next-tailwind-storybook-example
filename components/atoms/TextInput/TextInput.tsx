import classNames from 'classnames';

export interface ICustomInputProps {
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: 'primary' | 'secondary' | 'danger' | 'none';
  label?: string;
  placeholder?: string;
  id: string;
  //   name: string;
  field: {
    name: string;
    value: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export const TextInput = ({
  size = 'medium',
  backgroundColor = 'none',
  field = { name: '', value: '' },
  id,
  label,
  ...props
}: ICustomInputProps) => {
  return (
    <div className='flex flex-col items-start justify-center'>
      {label && (
        <label
          className={classNames(
            {
              'text-sm': size === 'small',
              'text-lg': size === 'medium',
              'text-xl': size === 'large',
            },
            'mr-2 w-max whitespace-nowrap'
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
        type='text'
        className={classNames(
          {
            'text-sm': size === 'small',
            'text-lg': size === 'medium',
            'text-xl': size === 'large',
            'bg-blue-400': backgroundColor === 'primary',
            'bg-lime-300': backgroundColor === 'secondary',
            'bg-red-300': backgroundColor === 'danger',
            'bg-transparent': backgroundColor === 'none',
          },
          'text-black w-full rounded-sm px-2 py-1 placeholder:text-gray-200'
        )}
        {...props}
      ></input>
    </div>
  );
};
