import { Routine } from '@/payload-types'
import { useQuery } from '@tanstack/react-query'
import { PaginatedDocs } from 'payload'

export function useRoutineQuery(routineId?: string) {
  return useQuery<Routine>({
    queryKey: ['routine', routineId],
    queryFn: async () => {
      if (!routineId) throw new Error('Routine ID is required')

      const response = await fetch(`/api/routines/${routineId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch routine: ' + response.statusText)
      }
      return response.json()
    },
    enabled: !!routineId, // Only run query if routineId exists
  })
}

export function useRoutines() {
  return useQuery<PaginatedDocs<Routine>>({
    queryKey: ['routines'],
    queryFn: async () => {
      const response = await fetch('/api/routines')
      if (!response.ok) {
        throw new Error('Failed to fetch routines: ' + response.statusText)
      }
      return response.json()
    },
  })
}
