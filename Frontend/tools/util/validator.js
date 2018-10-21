import * as R from 'ramda'

const validator = (schema, data) => {
  const validateResult = schema.validate(data)
  const isEmpty = R.isEmpty(validateResult)
  if (isEmpty) {
    return isEmpty
  }
  return Object.values(validateResult)
}

export default validator
