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

export function chirp(hz: number = 987.767): void {
  // Check if Web Audio API is available
  if (typeof window === 'undefined' || !window.AudioContext) {
    console.warn('Web Audio API not available')
    return
  }

  try {
    // Create audio context
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

    // Create oscillator for triangle wave
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    // Connect oscillator -> gain -> speakers
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Configure triangle wave
    oscillator.type = 'triangle'
    oscillator.frequency.setValueAtTime(hz, audioContext.currentTime) // 800Hz frequency

    // Configure volume envelope (quick fade in/out to avoid clicks)
    const now = audioContext.currentTime
    const duration = 0.2 // Duration of the chirp in seconds

    gainNode.gain.setValueAtTime(0, now)
    gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01) // Quick fade in
    gainNode.gain.linearRampToValueAtTime(0.1, now + duration - 0.05) // Hold
    gainNode.gain.linearRampToValueAtTime(0, now + duration) // Fade out

    // Start and stop the oscillator
    oscillator.start(now)
    oscillator.stop(now + duration)

    // Clean up
    oscillator.onended = () => {
      oscillator.disconnect()
      gainNode.disconnect()
    }
  } catch (error) {
    console.error('Error playing chirp sound:', error)
  }
}
