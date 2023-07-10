export function singleton<Value>(name: string, value: () => Value): Value {
  const connectDB = global as any
  connectDB.__singletons ??= {}
  connectDB.__singletons[name] ??= value()
  return connectDB.__singletons[name]
}
