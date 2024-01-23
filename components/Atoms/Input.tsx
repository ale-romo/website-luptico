interface Props {
  type?: 'text' | 'tel' | 'email';
  id: string;
  placeholder: string;
  required?: boolean;
}

export const TextInput = ({ type = 'text', id, placeholder, required = false}: Props) => {
  return  <input className="flex py-2 px-4 w-full" type={type} id={id} name={id} placeholder={placeholder} required={required} />
}

export default TextInput;
