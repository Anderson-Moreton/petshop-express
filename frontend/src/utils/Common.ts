const formatBR = (value: number): string => new Intl.NumberFormat('pt-BR').format(value);

export const parseDate = (value: string): string => {
  const rawData = value.split("-")
  return `${rawData[2]}/${rawData[1]}/${rawData[0]}`
}

export default formatBR;

export const handleHistoryPage = (history: any, groupId: string) => {
  history.push(`/admin/grupos-comerciais/historico/${groupId}`)
}

export const handleUnitsPage = (history: any, groupId: string) => {
  history.push(`/admin/grupos-comerciais/${groupId}`)
}
