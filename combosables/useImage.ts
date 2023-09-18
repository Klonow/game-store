export default function useImage(fileName: string) {
  const path = `/assets/images/${fileName}`
  const assets: Record<string, any>  = import.meta.glob('/assets/images/*', {eager: true})

  const getAssetUrl = () => {
    if (assets[path]) {
      const module = assets[path] as { default: string }
      return module.default
    }
  }

  return getAssetUrl()
}
