export interface FlattenObjType { [key: string]: any }

export function flattenObj(ob: FlattenObjType = {}, separator = '.'): FlattenObjType {
  const result: FlattenObjType = {}

  for (const i in ob) {
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i], separator)
      for (const j in temp)
        result[`${i}${separator}${j}`] = temp[j]
    }
    else {
      result[i] = ob[i]
    }
  }
  return result
}
