import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Erro from 'components/Contato/Erro';

import { inputStyle, textAreaStyle } from './styles';

interface ITypeofForm {
  type?: string,
}

const validationFormData = yup.object({
  //validando se é string, se nao for, o parametro eh o erro que o user vera
  nome: yup.string()
    .required('O preenchimento do nome é obrigatório.'),
  email: yup.string()
    .required('O preenchimento do email é obrigatório.')
    .email('Insira um email válido.'),
  assunto: yup.string()
    .required('Informe o assunto do seu contato')
    .max(50, 'Mensagem com no máximo 50 caracteres'),
  mensagem: yup.string()
    .required('Mensagem obrigatória')
    .min(10, 'Mensagem deve ter no mínimo 10 caracteres')
});

export default function Form({ type }: ITypeofForm ) {

  //desestruturacao do useForm 
  //passar para o resolver do yup o schema de validacoes e erros
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationFormData)});

  async function onSubmitForm(data: object){
    console.log(data); 
    console.log('email enviado?');
    
  }

  return (
    <form 
      id='contato'
      action="https://formsubmit.co/fiscoprevi@fiscoprevi.com.br"
      method="POST" 
      className={ 
        type == 'footer' 
          ? ' py-10 rounded text-center flex flex-col md:w-[80%] md:p-0 lg:w-[60%]'
          : 'bg-azulPrimario p-10 rounded text-center flex flex-col lg:w-[50%]'
      }
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {
        type && <h3 className='titleh3 text-start mb-6 md:text-center'>Contate-nos</h3>
      }
      
      <input 
        className={inputStyle} 
        {...register('nome')}
        name="nome" 
        type="text" 
        placeholder='Nome completo' 
      />
      {errors.nome && <Erro erro={errors.nome?.message}/>}
      <input
        className={inputStyle} 
        {...register('email')}
        name="email" 
        type="email" 
        placeholder='seuemail@dominio.com.br' 
      />
      {errors.email && <Erro erro={`${errors.email?.message}`}/>}
      <input 
        className={inputStyle}
        {...register('assunto')}
        name="assunto" 
        type="text" 
        placeholder='Assunto:' 
      />
      {errors.assunto && <Erro erro={`${errors.assunto?.message}`}/>}
      <textarea 
        className={textAreaStyle}
        {...register('mensagem')}
        name="mensagem" 
        cols={30} 
        rows={2} 
        placeholder='Escreva sua mensagem..' 
      />
      {errors.mensagem && <Erro erro={`${errors.mensagem?.message}`}/>}
      <input 
        className='w-full h-10 leading-10 py-0 px-4 bg-white rounded uppercase'
        type="submit" 
        value='Enviar'
      />
    </form>
  );
}

