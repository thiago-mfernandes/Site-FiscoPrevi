import { FieldErrors } from 'types';

export default function Erro({erro}:FieldErrors) {
  return <span className='text-red-600 mb-4'>{`${erro}`}</span>;
  
}
