import * as React from "react"

type FormFieldContextValue<
  TFieldValues = any,
  TName = any
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

export { FormFieldContext, FormItemContext }