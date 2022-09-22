import { FieldValues, DeepMap, FieldError } from 'react-hook-form';

export interface Props {
  name: string,
}

export interface Item {
  title?: string,
  href?: string
}

export interface ICardServico {
  icon: string,
  title: string,
  content: string
}

export interface ICardPrincipios {
  subtitle: string,
  content: string
}

export interface IFormData {
  nome: string,
  email: string,
  assunto: string,
  mensagem: string,
}

export type FieldErrors<
  TFieldValues extends FieldValues = FieldValues
> = DeepMap<TFieldValues, FieldError>;

