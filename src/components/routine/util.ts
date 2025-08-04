/**
 * Formats time in seconds as MM:SS or HH:MM:SS
 * @param seconds - Time in seconds to format
 * @param includeHours - Optional flag to include hours (defaults to false)
 * @returns Formatted time string (MM:SS or HH:MM:SS)
 */
export function formatTime(seconds?: number, includeHours: boolean = false): string {
  if (seconds === undefined || seconds < 0) {
    return includeHours ? '--:--:--' : '--:--'
  }

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (includeHours) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  // For MM:SS format, add hours to minutes if present
  const totalMinutes = minutes + hours * 60
  return `${totalMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}
