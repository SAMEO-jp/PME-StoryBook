import { renderHook, act, waitFor } from '@testing-library/react'
import { useAuth } from './useAuth'

describe('useAuth', () => {
  it('初期状態が正しい', () => {
    const { result } = renderHook(() => useAuth())

    expect(result.current.user).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('ログインが成功する', async () => {
    const { result } = renderHook(() => useAuth())

    await act(async () => {
      await result.current.login('test@example.com', 'password123')
    })

    await waitFor(() => {
      expect(result.current.isAuthenticated).toBe(true)
      expect(result.current.user).toEqual({
        id: '1',
        email: 'test@example.com',
        name: 'test',
      })
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBeNull()
    })
  })

  it('ログインが失敗する', async () => {
    const { result } = renderHook(() => useAuth())

    await act(async () => {
      try {
        await result.current.login('test@example.com', 'wrongpassword')
      } catch (error) {
        // Expected error
      }
    })

    await waitFor(() => {
      expect(result.current.isAuthenticated).toBe(false)
      expect(result.current.user).toBeNull()
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBe('メールアドレスまたはパスワードが正しくありません')
    })
  })

  it('ログアウトが正しく動作する', async () => {
    const { result } = renderHook(() => useAuth())

    // First login
    await act(async () => {
      await result.current.login('test@example.com', 'password123')
    })

    await waitFor(() => {
      expect(result.current.isAuthenticated).toBe(true)
    })

    // Then logout
    act(() => {
      result.current.logout()
    })

    expect(result.current.user).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('ローディング状態が正しく管理される', async () => {
    const { result } = renderHook(() => useAuth())

    const loginPromise = act(async () => {
      await result.current.login('test@example.com', 'password123')
    })

    // During login
    expect(result.current.isLoading).toBe(true)

    await loginPromise

    // After login
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })
  })
})
