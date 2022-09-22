import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import Erro from './Erro';

export interface IFormData {
  nome: string,
  email: string,
  assunto: string,
  mensagem: string,
}

const inputStyle = 'w-full h-10 rounded leading-10 py-0 px-4 text-cinzaSubTitle text-sm mb-4 focus:outline-[0] focus:shadow-none';
const textAreaStyle = 'rounded leading-10 py-0 px-4 text-cinzaSubTitle text-sm mb-9 focus:outline-[0] focus:shadow-none';

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

export default function Contato() {

  //desestruturacao do useForm 
  //passar para o resolver do yup o schema de validacoes e erros
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationFormData)});


  async function onSubmitForm(data: object){
    console.log(data);
    
    //limpar formulario
  }

  return (
    <section className='mt-36 w-full px-6 dlex flex-wrap text-center'>
      <h3 className='subtitle mb-3'>Você pode contar conosco para ajudá-lo</h3>
      <h2 className='titleh2 mb-9'>Preencha o
        <span className='text-azulPrimario'> Formulário</span>
      </h2>
      <p className='content text-cinzaSubTitle'>Responderemos sua solicitação o mais breve possível. Se preferir, fale conosco através das nossas redes sociais!</p>
      
      <form 
        id='contato'
        action=""
        method='post' 
        className='bg-azulPrimario p-14 rounded text-center flex flex-col'
        onSubmit={handleSubmit(onSubmitForm)}>
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
          rows={5} 
          placeholder='Escreva sua mensagem..' 
        />
        {errors.mensagem && <Erro erro={`${errors.mensagem?.message}`}/>}
        <input 
          className='w-full h-10 leading-10 py-0 px-4 bg-white rounded uppercase'
          type="submit" 
          value='Enviar'
        />
      </form>

    </section>
  );
}
