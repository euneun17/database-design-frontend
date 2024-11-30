export const formatDate = (timestamp: string) => {
  // Timestamp를 Date 객체로 변환
  const date = new Date(timestamp)

  // 연도, 월, 일 추출
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1 필요
  const day = String(date.getDate()).padStart(2, '0')

  // YYYY-MM-DD 형식으로 반환
  return `${year}-${month}-${day}`
}
